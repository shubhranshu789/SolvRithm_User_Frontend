"use client";

import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/page"
import { useRouter } from "next/navigation"
import { User, Mail, IdCard, Users } from "lucide-react";


interface Project {
    _id: string;
    name: string;
    desc: string;
    img: string;
    priority: string;
    dueDate?: string;
}

interface Student {
    _id: string;
    name: string;
    Member1: string;
    Member2?: string;
    Member3?: string;
    Member4?: string;
    email: string;
    uniRoll: string;
    ip: string;
    projects: Project[];
}

export default function Page() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [student, setStudent] = useState<Student | null>(null);

    const [loading, setLoading] = useState(true);

    const router = useRouter()


    const gotoParticularProject = (id: string) => {
        router.push(`/Components/ParticularProjectEnrolled/?id=${id}`)
    }


    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const userData = localStorage.getItem("user");
                if (!userData) {
                    console.error("No user found in localStorage");
                    setLoading(false);
                    return;
                }

                const parsed = JSON.parse(userData); // {_id: "..."}
                const studentId = parsed._id;

                const res = await fetch(`https://solvrithm-user-backend.onrender.com/students/${studentId}/projects`);
                if (!res.ok) {
                    throw new Error("Failed to fetch projects");
                }

                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };


        const fetchStudent = async () => {
            try {
                const userData = localStorage.getItem("user");
                if (!userData) {
                    console.error("No user found in localStorage");
                    setLoading(false);
                    return;
                }

                const parsed = JSON.parse(userData); // {_id: "..."}
                const studentId = parsed._id;

                const res = await fetch(`https://solvrithm-user-backend.onrender.com/students/${studentId}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch student details");
                }

                const data = await res.json();
                setStudent(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
        fetchStudent();
    }, []);

    if (loading) return <p className="text-center mt-6">Loading projects...</p>;


    //   const [loading, setLoading] = useState(true);



    if (loading) return <p className="text-center mt-6">Loading student details...</p>;

    if (!student) return <p className="text-center mt-6">No student found.</p>;

    return (
        <div>
            <Navbar />
            <div>
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Student Profile</h1>

                    <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        {/* Header */}
                        <h2 className="text-lg font-bold text-yellow-400 tracking-wide mb-4 border-b border-gray-600 pb-2">
                            👨‍💻 Student Profile
                        </h2>

                        {/* Details */}
                        <div className="space-y-3 text-black-200">
                            <p className="flex items-center gap-2">
                                <User className="w-5 h-5 text-yellow-400" />
                                <span className="font-medium">Leader:</span> {student.name}
                            </p>

                            <p className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-yellow-400" />
                                <span className="font-medium">Email:</span> {student.email}
                            </p>

                            <p className="flex items-center gap-2">
                                <IdCard className="w-5 h-5 text-yellow-400" />
                                <span className="font-medium">Roll:</span> {student.uniRoll}
                            </p>

                            {/* Team Members */}
                            <div className="flex items-start gap-2">
                                <Users className="w-5 h-5 text-yellow-400 mt-1" />
                                <div>
                                    <span className="font-medium">Team Members:</span>
                                    <ul className="ml-5 list-disc list-outside text-black-300 mt-1 space-y-1">
                                        {student.Member1 && <li>{student.Member1}</li>}
                                        {student.Member2 && <li>{student.Member2}</li>}
                                        {student.Member3 && <li>{student.Member3}</li>}
                                        {student.Member4 && <li>{student.Member4}</li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <h2 className="text-xl font-semibold mb-3">Enrolled Projects</h2>
                    {student.projects.length === 0 ? (
                        <p>No enrolled projects yet.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {student.projects.map((project) => (
                                <div
                                    key={project._id}
                                    className="rounded-xl shadow-md bg-white p-4 border hover:shadow-lg transition"
                                >
                                    <h3 className="text-lg font-semibold">{project.name}</h3>
                                    <p className="text-sm text-gray-600 line-clamp-3">{project.desc}</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Priority: <span className="font-medium">{project.priority}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    )} */}
                </div>
            </div>

            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">My Projects</h1>

                {projects.length === 0 ? (
                    <p>No projects enrolled yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projects.map((project) => (
                            <div
                                key={project._id}
                                className="rounded-xl shadow-md bg-white p-4 border hover:shadow-lg transition"
                            >
                                <img
                                    onClick={() => { gotoParticularProject(project._id) }}
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-40 object-cover rounded-md mb-3"
                                />
                                <h2 className="text-lg font-semibold">{project.name}</h2>
                                <p className="text-sm text-gray-600 mb-2 truncate">{project.desc}</p>
                                <p className="text-xs text-gray-500">
                                    Priority: <span className="font-medium">{project.priority}</span>
                                </p>
                                {project.dueDate && (
                                    <p className="text-xs text-gray-500">
                                        Due: {new Date(project.dueDate).toLocaleDateString()}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

    );
}
