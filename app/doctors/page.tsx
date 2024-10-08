"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. Emily Brown', specialization: 'Cardiology', licenseNumber: 'MD12345', consultationMode: 'In-person' },
    { id: 2, name: 'Dr. Michael Lee', specialization: 'Neurology', licenseNumber: 'MD67890', consultationMode: 'Telemedicine' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Affiliated Doctors</h1>
      <div className="mb-4">
        <Input placeholder="Search doctors..." className="max-w-sm" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>License Number</TableHead>
            <TableHead>Consultation Mode</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.id}>
              <TableCell>{doctor.name}</TableCell>
              <TableCell>{doctor.specialization}</TableCell>
              <TableCell>{doctor.licenseNumber}</TableCell>
              <TableCell>{doctor.consultationMode}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="mt-4">Add New Doctor</Button>
    </div>
  );
}