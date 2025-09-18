"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
    Plus,
    FolderOpen,
    CheckCircle,
    Clock,
    AlertTriangle,
    BarChart3,
    Edit,
    Trash2,
    MoreHorizontal,
    List,
    TrendingUp,
} from "lucide-react"

// import "../../Components/Auth/SignIn"


import { useRouter } from "next/navigation"

export default function page() {

    const router = useRouter()


    const gotoCreateProject = () => {
        // router.push("/Components/CreateActivity")
    }
    const gotoDashBoard = () => {
        router.push("/Components/DashBoard")
    }
    const gotoEnrolledProjects = () => {
        router.push("/Components/EnrolledProjects")
    }

    const gotoSignin = () => {
        localStorage.clear();
        router.push("/Components/Auth/SignIn")
    }



    return (
        <div>
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div style={{ cursor: "pointer" }} onClick={() => { gotoDashBoard() }} className="flex items-center gap-3">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/SolvRithm.png"
                                    alt="SolvRithm logo"
                                    width={50}          // intrinsic size for optimization
                                    height={50}
                                    className="h-13 w-13 rounded-full object-cover ring-2 ring-white/20"
                                    priority
                                />
                            </div>
                            <div >
                                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">SolvRithm</h1>
                                {/* <p className="text-sm text-slate-600 dark:text-slate-400">Admin Dashboard</p> */}
                            </div>
                        </div>
                        <div style={{display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "10px"}}>
                            <Button
                                onClick={gotoEnrolledProjects}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            >
                                {/* <Plus className="w-4 h-4 mr-2" /> */}
                                Projects
                            </Button>
                            <Button
                                onClick={gotoSignin}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            >
                                {/* <Plus className="w-4 h-4 mr-2" /> */}
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
