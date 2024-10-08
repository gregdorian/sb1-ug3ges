"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ServiceOrdersPage() {
  const [serviceOrders, setServiceOrders] = useState([
    { id: 1, patientName: 'John Doe', testType: 'Blood Test', date: '2023-04-15', status: 'Pending' },
    { id: 2, patientName: 'Jane Smith', testType: 'Urinalysis', date: '2023-04-16', status: 'Completed' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Service Orders</h1>
      <div className="mb-4">
        <Input placeholder="Search service orders..." className="max-w-sm" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient Name</TableHead>
            <TableHead>Test Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {serviceOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.patientName}</TableCell>
              <TableCell>{order.testType}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">View</Button>
                <Button variant="outline" size="sm">Update</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="mt-4">Create New Service Order</Button>
    </div>
  );
}