// 다크모드 토글 함수 만들기

    // 바디 글자색 바꾸기
    function BodySetColor(color){
        document.querySelector('body').style.color = color;
    }

    // 바디 배경색 바꾸기
    function BodySetBackgroundColor(color){
        document.querySelector('body').style.backgroundColor = color;
    }

    // 주간, 야간모드
    function DayNightHandler(self) {
            const target = document.querySelector('body');
            if (self.value == 'day') {
                BodySetBackgroundColor('RGB(26,36,54)');
                BodySetColor('white');
                LinkSetColor('powderblue')
                self.value = 'night';
            }
            else {
                BodySetBackgroundColor('white');
                BodySetColor('black');
                LinkSetColor('blue')
                self.value = 'day';
            }
        }


export const lightTheme = {
    bgColor:'#FDF5E6',
    textColor:'#000000',
    borderColor:'2px solid  #D7AC87',
};

export const darkTheme = {
    bgColor:'#505050',
    textColor:'#FFF0F5',
    borderColor:'2px solid  #ffffff',
};

export const theme = {
    lightTheme,
    darkTheme,
};