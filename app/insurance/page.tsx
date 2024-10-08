"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function InsurancePage() {
  const [insuranceCompanies, setInsuranceCompanies] = useState([
    { id: 1, name: 'HealthGuard Insurance', contactPerson: 'Sarah Johnson', phone: '555-1111', email: 'info@healthguard.com' },
    { id: 2, name: 'MediCare Plus', contactPerson: 'David Smith', phone: '555-2222', email: 'support@medicare-plus.com' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Insurance Companies</h1>
      <div className="mb-4">
        <Input placeholder="Search insurance companies..." className="max-w-sm" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Contact Person</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {insuranceCompanies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.contactPerson}</TableCell>
              <TableCell>{company.phone}</TableCell>
              <TableCell>{company.email}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="mt-4">Add New Insurance Company</Button>
    </div>
  );
}