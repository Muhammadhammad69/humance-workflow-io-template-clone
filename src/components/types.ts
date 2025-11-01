// services Data types

interface Service {
    id: number;
    t1: string;
    t2: string;
    description: string;
    image: string;
    alt: string;
    isClicked: boolean
}

// Blog data type

interface BlogType {
    id: number;
    image: string;
    title: string;
    date: string;
    category: string;
    department: string;
    alt: string;
}

interface IOurTeam {
    id: number;
    image: string;
    name: string;
    email: string;
    designation: string;
    alt: string;
}

interface IProjects {
    id: number;
    projectTitle: string;
    projectCategory: string;
    clientName: string;
    image: string;
    alt: string;
}

export type{ Service, BlogType, IOurTeam, IProjects };