"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TechniciansPage() {
  const [technicians, setTechnicians] = useState([
    { id: 1, name: 'Alice Johnson', specialization: 'Hematology', experience: '5 years' },
    { id: 2, name: 'Bob Williams', specialization: 'Microbiology', experience: '3 years' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Lab Technicians</h1>
      <div className="mb-4">
        <Input placeholder="Search technicians..." className="max-w-sm" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {technicians.map((technician) => (
            <TableRow key={technician.id}>
              <TableCell>{technician.name}</TableCell>
              <TableCell>{technician.specialization}</TableCell>
              <TableCell>{technician.experience}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="mt-4">Add New Technician</Button>
    </div>
  );
}