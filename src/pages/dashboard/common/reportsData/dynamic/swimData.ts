const returnedData: { [k: string]: string } = {};

function swimData(data: any) {
   returnedData['شنا گود شدن کمر'] = data['گود شدن کمر'] ? "احتمال بیش فعالی عضلات راست کننده ی ستون فقرات، خم کننده های ران و کم فعالی عضلات پایدار کننده های ناحیه ثبات مرکزی تنه، سرینی بزرگ" : 'طبیعی';
   returnedData['شنا صاف شدن کمر'] = data['صاف شدن کمر'] ? "احتمال بیش فعالی عضلات راست شکمی، مایل خارجی و کم فعالی عضلات پایدار کننده های ناحیه مرکزی تنه " : 'طبیعی';
   returnedData['شنا بالا آمدن شانه'] = data['بالا آمدن شانه'] ? "احتمال بیش فعالی عضلات ذوزنقه ی فوقانی، گوشه ای، جناغی-چنبری-پستانی و کم فعالی عضلات ذوزنقه میانی و تحتانی" : 'طبیعی';
   returnedData['شنا بالی شدن کتف'] = data['بالی شدن کتف'] ? "احتمال بیش فعالی عضلات سینه ای کوچک و کم فعالی عضلات دندان های قدامی، ذوزنقه ی میانی و تحتانی" : 'طبیعی';
   returnedData['شنا هایپراکستنشن گردن'] = data['هایپراکستنشن گردن'] ? "احتمال بیش فعالی عضلات ذورنقه ی فوقانی، جناغی-چنبری-پستانی، گوشه ای، و کم فعالی عضلات خم کننده های عمقی گردن" : 'طبیعی';

   return returnedData;
}

export default swimData