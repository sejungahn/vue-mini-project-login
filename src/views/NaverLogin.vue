<template>
    <div id="naverIdLogin"></div>
    <button type="button" @click="logout">로그아웃</button>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            naverLogin: null
        }
    },
    mounted () {
        this.naverLogin = new window.naver.LoginWithNaverId({
            clientId: '9L4DJJx88LIQKnQYC8CO', // 개발자센터에 등록한 ClientId
            callbackUrl: 'http://localhost:8080/naverLogin', // 개발자센터에 등록한 callback Url
            isPopup: false, // 팝업을 통한 연동처리 여부
            loginButton: {
                color: 'green', type: 3, height: 60
            } // 로그인 버튼의 타입을 지정
        })

        // 설정 정보를 초기화하고 연동을 준비
        this.naverLogin.init()

        this.naverLogin.getLoginStatus((status) => {
            if (status) {
                console.log(status)
                console.log(this.naverLogin.user)

                // 필수적으로 받아야 하는 프로필 정보가 있다면 callback 처리 시점에 체크
                const email = this.naverLogin.user.getEmail()
                // eslint-disable-next-line eqeqeq
                if (email == undefined || email == null) {
                    alert('이메일은 필수 정보입니다. 정보 제공을 동의해주세요.')
                    // 사용자 정보 재동의를 위하여 다시 네이버 동의 페이지로 이동함
                    this.naverLogin.reprompt()
                    // eslint-disable-next-line no-useless-return
                    return
                }
            } else {
                console.error('callback 처리에 실패하였습니다.', status)
            }
        })
    },
    methods: {
        logout () {
            const accessToken = this.naverLogin.accessToken.accessToken
            const url = `/oauth2.0/token?grant_type=delete&client_id=9L4DJJx88LIQKnQYC8CO&client_secret=Dz5wBCKjL5&access_token=${accessToken}`

            axios.get(url).then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.error(error)
            })
        }

    }
}
</script>
