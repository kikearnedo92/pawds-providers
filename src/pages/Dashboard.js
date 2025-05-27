import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  Package,
  Clock,
  Star,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    monthlyRevenue: 12450,
    activeOrders: 24,
    todayAppointments: 8,
    averageRating: 4.8,
    totalProducts: 45,
    pendingOrders: 5
  });

  const recentOrders = [
    { id: 1001, customer: 'María González', pet: 'Luna (Labrador)', total: 45.00, status: 'pending' },
    { id: 1002, customer: 'Carlos Ruiz', pet: 'Max (Golden)', total: 89.50, status: 'completed' },
    { id: 1003, customer: 'Ana Martínez', pet: 'Milo (Gato)', total: 32.00, status: 'processing' },
  ];

  const todayAppointments = [
    { time: '10:00', service: 'Peluquería canina', pet: 'Rocky (Schnauzer)', status: 'confirmed' },
    { time: '11:30', service: 'Consulta veterinaria', pet: 'Bella (Persa)', status: 'confirmed' },
    { time: '14:00', service: 'Baño y corte', pet: 'Thor (Husky)', status: 'pending' },
  ];

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    confirmed: 'bg-green-100 text-green-800'
  };

  const statusText = {
    pending: 'Pendiente',
    processing: 'En proceso',
    completed: 'Completado',
    confirmed: 'Confirmado'
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Bienvenido de vuelta, aquí está tu resumen del día</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ingresos del mes</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                ${stats.monthlyRevenue.toLocaleString()}
              </p>
              <p className="text-sm text-green-600 mt-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12% vs mes anterior
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pedidos activos</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{stats.activeOrders}</p>
              <p className="text-sm text-orange-600 mt-2 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {stats.pendingOrders} pendientes
              </p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Citas de hoy</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{stats.todayAppointments}</p>
              <p className="text-sm text-gray-500 mt-2 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Próxima: 10:00 AM
              </p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Calificación promedio</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{stats.averageRating}</p>
              <p className="text-sm text-gray-500 mt-2 flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                De 5.0 estrellas
              </p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Pedidos recientes</h2>
              <a href="/orders" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Ver todos →
              </a>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Pedido #{order.id}</p>
                  <p className="text-sm text-gray-600 mt-1">{order.customer}</p>
                  <p className="text-xs text-gray-500">{order.pet}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${order.total.toFixed(2)}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${statusColors[order.status]}`}>
                    {statusText[order.status]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Citas de hoy</h2>
              <a href="/appointments" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Ver calendario →
              </a>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {todayAppointments.map((appointment, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">{appointment.time}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{appointment.service}</p>
                  <p className="text-sm text-gray-600 mt-1">{appointment.pet}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${statusColors[appointment.status]} inline-block mt-2`}>
                    {statusText[appointment.status]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Acciones rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white/20 backdrop-blur hover:bg-white/30 transition-colors rounded-lg p-4 text-left">
            <Package className="w-6 h-6 mb-2" />
            <p className="font-medium">Agregar producto</p>
            <p className="text-sm text-blue-100">Nuevo inventario disponible</p>
          </button>
          <button className="bg-white/20 backdrop-blur hover:bg-white/30 transition-colors rounded-lg p-4 text-left">
            <Calendar className="w-6 h-6 mb-2" />
            <p className="font-medium">Nueva cita</p>
            <p className="text-sm text-blue-100">Programar servicio</p>
          </button>
          <button className="bg-white/20 backdrop-blur hover:bg-white/30 transition-colors rounded-lg p-4 text-left">
            <ShoppingBag className="w-6 h-6 mb-2" />
            <p className="font-medium">Ver pedidos</p>
            <p className="text-sm text-blue-100">{stats.pendingOrders} requieren atención</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;