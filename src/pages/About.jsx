const About = () => {
    return ( 
        <div style={{width:'100%', height:'100%'}}>
            <p>구성 <br />
            동영상 마우스호버 - 재생되도록 크게 넣기
            scroll 이벤트로 이 블로그 프로젝트 소개
            </p>
            <video autoPlay loop muted playsInline
            width="100%" 
            height="100%">
            <source src={"../public/video/write.mp4"} type="video/mp4" />
            </video>        
            
            <h4>이 페이지는 ~~~</h4>
        </div>
    );
}

export default About;