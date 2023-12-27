<template>
    <div>
        <a id="kakao-login-btn" @click="kakaoLogin()">
            <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
        </a>
        <a @click="kakaoLogout()">로그아웃</a>
    </div>
</template>
<script>
export default {
    name: 'KakaoLogin',
    methods: {
        kakaoLogin () {
            window.Kakao.Auth.login({
                scope: 'profile_nickname, account_email, profile_image',
                success: () => {
                    this.getKakaoAccount()
                }
            })
        },
        kakaoLogout () { // 로그아웃
            window.Kakao.Auth.logout((response) => {
                console.log(response)
            })
        },
        getKakaoAccount () {
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                    const kakaoAccount = res.kakao_account
                    const nickname = kakaoAccount.profile.nickname
                    const email = kakaoAccount.profile.email
                    const image = kakaoAccount.profile.image
                    console.log('nickname', nickname)
                    console.log('email', email)
                    console.log('image', image)

                    // 로그인 처리 구현
                    alert('로그인 성공!')
                },
                fail: error => {
                    console.log(error)
                }
            })
        }
    }
}
</script>
