import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./_projects.css";

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
    stargazers_count: number;
    fork: boolean;
}

const Projects = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const includeRepos = ["doamais", "vaultservice", "dotnetstarter", "librarymanagerapi", "geekshopping", "blazorbookstore"];

    useEffect(() => {
        fetch("https://api.github.com/users/rafaelx0liveira/repos", {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                "Accept": "application/vnd.github.v3+json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            const filtered = data.filter((repo: Repo) => includeRepos.includes(repo.name.toLowerCase()));
            setRepos(filtered);
        });
    }, []);

    return (
            <section className="testimonal container section">
                <h2 className="section-title">Projects</h2>
                <span className="section-subtitle">GitHub</span>
    
                <Swiper className="project-container"
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        }
                    }}
                    style={{
                        width: "70%",
                    }}
                    modules={[Pagination]}
                    >
                    { 
                        repos.map((repo) => (
                            <SwiperSlide className="project-card" key={repo.id}>
                                <h3 className="project-title">{repo.name}</h3>
                                <p className="project-description">
                                    {repo.description || "Sem descrição disponível."}
                                </p>
                                <p className="project-meta">
                                    <strong>Language:</strong> {repo.language || "N/A"}, .NET<br />
                                </p>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-button"
                                >
                                    View on GitHub <i className="bx bxl-github"></i>
                                </a>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        )
};

export default Projects;
