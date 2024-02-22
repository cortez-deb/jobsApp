import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import { useFetch } from "../../hook/useFetch";

const tabs =["About", "Qualifications", "Responsibilities"]

const JobDetails = ({ job, key, handleNavigate }: { job: any, key: string, handleNavigate: any }) => {

    const params = useLocalSearchParams();
    const router = useRouter();
    const { data, loading, error } = useFetch("job-details", { job_id: params.id });
    console.log(data);
    const [refreshing, setRefreshing] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(tabs[0]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={
                    {
                        headerStyle: { backgroundColor: COLORS.white },
                        headerShadowVisible: true,
                        headerBackVisible: false,
                        headerLeft: () => (
                            <ScreenHeaderBtn
                                iconUrl={icons.left}
                                dimensions="60%"
                                handlePress={() => router.back()}
                            />
                        ),
                        headerRight: () => (
                            <ScreenHeaderBtn
                                iconUrl={icons.share}
                                dimensions="60%"
                                handlePress={() => console.log("share")}
                            />
                        ),
                        headerTitle: ""
                    }
                }>
            </Stack.Screen>
            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => {
                                setRefreshing(true);
                                setTimeout(() => setRefreshing(false), 1000);
                            }}
                        />
                    }>
                    {
                        loading? (<ActivityIndicator size="large" color={COLORS.primary} />) :
                        error? (<Text>{error}</Text>):
                        data?.length === 0? (<Text>No data</Text>):
                        (
                            <View style={{padding:SIZES.medium, paddingBottom:100}}>
                                <Company
                                    companyLog={data[0]?.employer_logo}
                                    jobTitle={data[0]?.job_title}
                                    companyName={data[0]?.employer_name}
                                    Location={data[0]?.job_country}
                                />
                                <JobTabs
                                    tabs={tabs}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                                <JobAbout/>
                                <Specifics/>
                                <JobFooter/>
                            </View>
                        )
                    }
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default JobDetails;