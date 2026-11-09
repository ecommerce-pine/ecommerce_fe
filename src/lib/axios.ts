import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 30000,
    withCredentials: true, // Enable sending cookies with requests
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor
axiosInstance.interceptors.response.use(
    // request success
    (response) => response,

    // request error
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            toast.error("Unauthorized access. Please log in.");

            if (typeof window !== "undefined") {
                redirect("/auth/signin");
            }
        }

        if (error.response?.status === 403) {
            toast.error(
                "Forbidden access. You do not have permission to access this resource.",
            );
        }

        if (!error.response) {
            toast.error(
                "Network error. Please check your internet connection.",
            );
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;
