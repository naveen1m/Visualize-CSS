import React from 'react';
import { Container, Title, Text, Button, Group } from '@mantine/core';
import { Illustration } from './ErrorBg';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="relative h-screen bg-stone-400">
            {/* Illustration as the background */}
            <Illustration
                className="absolute inset-0 w-full  h-full object-cover opacity-10"
                style={{ zIndex: -1 }}
            />

            <Container className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div>
                    <Title className="font-GreycliffCF font-bold text-3xl md:text-2xl">
                        {/* Your title */}
                        Nothing to see here
                    </Title>
                    <Text className="text-gray-200 text-lg mt-6">
                        {/* Your text */}
                        Page you are trying to open does not exist. You may have mistyped the address, or the
                        page has been moved to another URL. If you think this is an error, please contact support.
                    </Text>
                    <Group justify="center" className="mt-8 flex items-center justify-center ">
                        <Link to='/'>
                            <Button size="md">Take me back to the home page</Button>
                        </Link>
                    </Group>
                </div>
            </Container>
        </div>
    );
}

export default ErrorPage;
