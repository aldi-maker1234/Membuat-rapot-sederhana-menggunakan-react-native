import React, {useState} from "react";
import { View, Button, SafeAreaView, Text, StatusBar } from "react-native";

export default App = () => {
const [hasil,setHasil] = useState("");

  const cekrapot = (NAMA, IPA, IPS, Bahasa, MTK) => {
    const total = IPA + IPS + Bahasa + MTK;
    const rata = total / 4;
    const status = rata >= 75 ? "Lulus" : "Tidak Lulus"; // Menggunakan "rata" bukan "rata2"
    setHasil(`
      RAPOT SISWA \n
      Nama Siswa : ${NAMA} \n
      Nilai Rapot : \n
      IPA : ${IPA} \n
      IPS : ${IPS} \n
      Bahasa : ${Bahasa} \n
      MTK : ${MTK} \n
      Total : ${total} \n
      Rata-rata : ${rata} \n
      Status : ${status} \n 
    `);
  };

  const resetHasil = () => {
    setHasil(""); // Mengosongkan hasil rapot
  };

  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight, gap: 20, backgroundColor: 'skyblue', alignItems: 'center' }}>
      <Text style={{ textAlign: "left", fontSize: 40, fontWeight: "400", textTransform: 'capitalize', marginTop: 20 }}>
        Rapot Siswa
      </Text>
      <Text style={{fontSize: 10}}>        {hasil} {/* Menampilkan nilai hasil */}
</Text>
<View style={{flexDirection: 'row', gap: 10}}>
<Button 
        title="Rapot Adi"
        color="red"
        onPress={() => cekrapot("Adi", 78, 95, 65, 70)}
      />
      <Button 
        title="Rapot Ucup"
        color="green"
        onPress={() => cekrapot("Ucup", 85, 75, 80, 90)}
      />
</View>
<View style={{flexDirection: 'row', gap: 10}}>
<Button 
        title="Rapot Akmal"
        color="red"
        onPress={() => cekrapot("Akmal", 78, 95, 65, 70)}
      />
      <Button 
        title="Rapot Denis"
        color="green"
        onPress={() => cekrapot("Denis", 85, 75, 80, 90)}
      />
</View>
<View style={{flexDirection: 'row', gap: 10}}>
<Button 
        title="Rapot Jausyan"
        color="red"
        onPress={() => cekrapot("Jausyan", 78, 95, 65, 70)}
      />
      <Button 
        title="Rapot Farel"
        color="green"
        onPress={() => cekrapot("Farel", 85, 75, 80, 90)}
      />
</View>
<View style={{flexDirection: 'row', gap: 10}}>
<Button 
        title="Rapot Galuh"
        color="red"
        onPress={() => cekrapot("Galuh", 78, 95, 65, 70)}
      />
      <Button 
        title="Rapot Aldi"
        color="green"
        onPress={() => cekrapot("Aldi", 85, 75, 80, 90)}
      />
</View>
      <Button
      title="Reset"
      onPress={resetHasil} 
      />
    </View>
  );
}
