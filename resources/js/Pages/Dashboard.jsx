import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title='Dashboard'/>
            <AdminLayout>
                <h2>Dashboard</h2>
            </AdminLayout>
        </>
    );
}
