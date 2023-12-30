<template>
    <div>
        <div id="google-signin-btn"></div>
    </div>
</template>
<script>
/* global google */
export default {
    mounted () {
        const checkGoogleIdp = () => {
            if (google && google.accounts && google.accounts.idp) {
                // Google One Tap API가 로드된 경우
                this.initGoogleOneTap()
            } else {
                // Google One Tap API가 로드되지 않은 경우, 재시도
                setTimeout(checkGoogleIdp, 100)
            }
        }

        // 초기 로드 시 한 번 실행하고, 이후 변경사항을 감지하여 체크
        checkGoogleIdp()
    },
    methods: {
        initGoogleOneTap () {
            // 이제 여기서 google.accounts.idp.SingleLoginInfo 사용 가능
            const oneTap = new google.accounts.idp.SingleLoginInfo()
                .setClientConfig({
                    client_id: '632169551037-ccdqkgh986nfcksvr2k4oj7ip363iitg.apps.googleusercontent.com'
                })

            google.accounts.idp.prompt(oneTap, this.onSignIn, this.onSignInFailure)
        },
        onSignIn (response) {
            console.log('Credential response: ', response)
            // Handle the credential response.
        },
        onSignInFailure (error) {
            console.error('Credential error: ', error)
            // Handle the error.
        }
    }

}
</script>
