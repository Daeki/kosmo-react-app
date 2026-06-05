import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [member, setMember] = useState(() => {
        try {
            const memberInfo = localStorage.getItem("member");
            return memberInfo ? JSON.parse(memberInfo) : null;
        } catch (error) {
            console.error("Failed to parse member from localStorage:", error);
            localStorage.removeItem("member"); // 잘못된 데이터 삭제
            return null;
        }
    });

    return (
        <AuthContext.Provider value={{ member, setMember }}>
            {children}
        </AuthContext.Provider>
    );
}

// 편의를 위해 useContext를 감싼 커스텀 훅을 내보냅니다.
export const useAuth = () => useContext(AuthContext);

