// App.test.js

// Mock API functions (extracted from BookingPage.js)
const fetchAvailableTimes = (date) => {
  const dayOfWeek = new Date(date).getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const submitReservation = async (formData) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));
  console.log('Reservation submitted:', formData);
  return { success: true, confirmationId: 'LL' + Date.now() };
};

// Jest Tests
describe('BookingPage API Functions', () => {
  
  describe('fetchAvailableTimes', () => {
    test('should return 6 time slots for weekdays', () => {
      // Monday (day 1)
      const mondayTimes = fetchAvailableTimes('2025-07-21');
      const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      
      expect(mondayTimes).toEqual(expectedTimes);
      expect(mondayTimes).toHaveLength(6);
    });

    test('should return 11 time slots for weekends', () => {
      // Sunday (day 0)
      const sundayTimes = fetchAvailableTimes('2025-07-20');
      const expectedTimes = [
        '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
        '20:00', '20:30', '21:00', '21:30', '22:00'
      ];
      
      expect(sundayTimes).toEqual(expectedTimes);
      expect(sundayTimes).toHaveLength(11);
    });

    test('should return weekend times for Saturday', () => {
      // Saturday (day 6)
      const saturdayTimes = fetchAvailableTimes('2025-07-19');
      
      expect(saturdayTimes).toHaveLength(11);
      expect(saturdayTimes[0]).toBe('17:00');
      expect(saturdayTimes[10]).toBe('22:00');
    });
  });

  describe('submitReservation', () => {
    test('should successfully submit reservation and return confirmation', async () => {
      const mockFormData = {
        date: '2025-07-21',
        time: '19:00',
        guests: 4,
        occasion: 'Birthday',
        seatingArea: 'Indoor',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '555-123-4567',
        specialRequests: 'Window table please'
      };

      const result = await submitReservation(mockFormData);

      expect(result).toHaveProperty('success', true);
      expect(result).toHaveProperty('confirmationId');
      expect(result.confirmationId).toMatch(/^LL\d+$/);
    });

    test('should handle empty form data', async () => {
      const emptyFormData = {};

      const result = await submitReservation(emptyFormData);

      expect(result.success).toBe(true);
      expect(result.confirmationId).toBeDefined();
    });

    test('should generate unique confirmation IDs', async () => {
      const formData1 = { firstName: 'John' };
      const formData2 = { firstName: 'Jane' };

      const result1 = await submitReservation(formData1);
      const result2 = await submitReservation(formData2);

      expect(result1.confirmationId).not.toBe(result2.confirmationId);
    });
  });
});