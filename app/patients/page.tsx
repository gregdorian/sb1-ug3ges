"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function PatientsPage() {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 35, sex: 'Male', address: '123 Main St', contact: '555-1234' },
    { id: 2, name: 'Jane Smith', age: 28, sex: 'Female', address: '456 Elm St', contact: '555-5678' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Manage Patients</h1>
      <div className="mb-4">
        <Input placeholder="Search patients..." className="max-w-sm" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Sex</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.sex}</TableCell>
              <TableCell>{patient.address}</TableCell>
              <TableCell>{patient.contact}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="mt-4">Add New Patient</Button>
    </div>
  );
}