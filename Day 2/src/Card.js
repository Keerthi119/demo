import Service from "./Service";

function Card(props){
    const services =[
        {
            title: "Artificial Intelligence",
            subTitle: "Basics of Artificial Intelligence",
            desc: "AI development involves the work of the data science team, software development engineers, and scrum masters, but it also includes you at the heart of the project – it is all done in collaboration with you and your team to meet all expectations.",
            image: "https://cdn.datafloq.com/cache/blog_pictures/878x531/ai_development_company_2_s2ed2yr.jpg"
        },
        {
            title: "Machine Learning",
            subTitle: "Basics of Machine Learning",
            desc: "Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.",
            image: "https://miro.medium.com/max/848/1*M9le42saJxWlOYyYvhKtPA.jpeg"
        },
        {
            title: "CyberSecurity",
            subTitle: "Basics of CyberSecurity",
            desc: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users.",
            image: "https://www.elmhurst.edu/wp-content/uploads/2020/03/cybersecurity-vs-information-security-illustration.jpg"
        },
        {
            title: "Web Development",
            subTitle: "Basics of Web Development",
            desc: "Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
            image: "https://www.spinutech.com/webres/Image/web-design-development/articles/Web%20Dev-Blog.png"
        },
        {
            title: "App Development",
            subTitle: "Basics of App Development",
            desc: "App development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These software applications are designed to run on mobile devices, such as a smartphone or tablet.",
            image: "https://titan-dev.net/wp-content/uploads/2020/12/mobile-app-development-guide-scaled.jpg"
        }

    ]
    return(
        <div>
            <h1 className = "container-title"> Courses</h1>
                <div className = "container">
                    {
                        services.map((service, index)=>(
                            <Service key= {index} 
                                    title= {service.title}
                                    subTitle= {service.subTitle}
                                    desc= {service.desc}
                                    image= {service.image}/>
                        ))
                    }
                </div>
            
        </div>       
    )
}

export default Card;