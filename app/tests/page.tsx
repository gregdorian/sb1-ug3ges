"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TestsPage() {
  const [tests, setTests] = useState([
    { id: 1, name: 'Complete Blood Count', department: 'Hematology', duration: '1 hour' },
    { id: 2, name: 'Lipid Panel', department: 'Biochemistry', duration: '2 hours' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Laboratory Tests</h1>
      <div className="mb-4">
        <Input placeholder="Search tests..." className="max-w-sm" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Test Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tests.map((test) => (
            <TableRow key={test.id}>
              <TableCell>{test.name}</TableCell>
              <TableCell>{test.department}</TableCell>
              <TableCell>{test.duration}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="mt-4">Add New Test</Button>
    </div>
  );
}