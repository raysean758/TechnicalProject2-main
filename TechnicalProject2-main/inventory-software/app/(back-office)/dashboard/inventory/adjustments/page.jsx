"use client";


        async function onSubmit(data) {
            console.log(data);
            setLoading(true);
            const baseUrl = "https://localhost:3000";
            try {
                const response = await fetch(`${baseUrl}/api/adjustments`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                if (response.ok) {
                    console.log(response);
                    setLoading(false);
                    reset();
                    }
                } catch (error) {
                    setLoading(false);
                    console.log(error);
                }
            }
            return (
                <div></div>
            )