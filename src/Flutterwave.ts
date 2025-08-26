let hasExecuted = false
export default {
    install(Vue: any, userOptions:{pubKey?: string} = {}): void {

        if (userOptions?.pubKey)
            Vue.config.globalProperties.$public_key = userOptions.pubKey

        Vue.mixin({
            mounted(){
                if (!hasExecuted) {
                    let script = document.createElement('script')
                    script.src = "https://checkout.flutterwave.com/v3.js"
                    document.body.appendChild(script)
                    hasExecuted = true
                }
            }
        })
    }
}