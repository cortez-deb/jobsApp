
export const checkimageURL = (url: string) => {
    if(!url) return false
    else{
        const pattern = new RegExp('^(https?:\\/\\/.+\\.(jpeg|jpg|gif|png|webp))$', 'i');
        return pattern.test(url)
    }
}