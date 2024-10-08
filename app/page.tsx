import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Laboratory Management System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/patients">
          <Button className="w-full">Manage Patients</Button>
        </Link>
        <Link href="/service-orders">
          <Button className="w-full">Service Orders</Button>
        </Link>
        <Link href="/tests">
          <Button className="w-full">Laboratory Tests</Button>
        </Link>
        <Link href="/technicians">
          <Button className="w-full">Lab Technicians</Button>
        </Link>
        <Link href="/doctors">
          <Button className="w-full">Affiliated Doctors</Button>
        </Link>
        <Link href="/insurance">
          <Button className="w-full">Insurance Companies</Button>
        </Link>
      </div>
    </div>
  );
}