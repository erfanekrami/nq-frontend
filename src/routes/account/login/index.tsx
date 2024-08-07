import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack, InputField } from "@yakad/ui";
import { useFetch, useFormDataHandle } from "@yakad/lib";

interface AccountSendCode {
    email?: string;
}

function Login() {
    const [data, setData] = useState<AccountSendCode>({});
    const navigate = useNavigate();

    const formDataHandler = useFormDataHandle(setData);
    const fetch = useFetch("http://localhost:8080/account/sendCode/1", {
        method: "POST",
        body: JSON.stringify(data),
    });

    useEffect(() => {
        if (fetch.response?.status === 200) {
            navigate("/account/verify", {
                replace: true,
                state: { email: data.email },
            });
        }
    }, [fetch.response]);

    return (
        <Stack style={{ alignItems: "center" }}>
            <div>
                <h5>Enter email to SignIn or Register account. </h5>
                <h3>{fetch.error?.message}</h3>
                <h4>{fetch.loading ? "Loading" : ""}</h4>
            </div>

            <form onSubmit={fetch.send} onChange={formDataHandler.handle}>
                <InputField type="email" placeholder="Email" />

                <Button
                    variant="filled"
                    style={{ width: "100%", justifyContent: "center" }}
                >
                    Get verify code
                </Button>
            </form>

            <Button
                onClick={() => {
                    navigate(-1);
                }}
            >
                Cancel
            </Button>
        </Stack>
    );
}

export default Login;
