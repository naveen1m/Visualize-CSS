import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

export function Hamburger() {
    const [opened, { toggle }] = useDisclosure();
    return <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
