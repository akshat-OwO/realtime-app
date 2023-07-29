import AddFriendButton from '@/components/AddFriendButton';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
    title: 'RealChat | Add a Friend'
}

const page = ({}) => {
    return (
        <main className="pt-8">
            <h1 className="font-bold text-2xl md:text-5xl mb-8">Add a friend</h1>
            <AddFriendButton />
        </main>
    );
};

export default page;
