import { 
  IonAvatar,
  IonButton,
  IonContent, 
  IonHeader, 
  IonInput, 
  IonInputPasswordToggle, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter
} from '@ionic/react';
import { useState } from 'react';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  
  // State for email and password
  const [email, setEmail] = useState("Jboyjabeniao@gmail.com");
  const [password, setPassword] = useState("");

  const doLogin = () => {
    navigation.push('/it35-lab/app', 'forward', 'replace');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <IonAvatar style={{ width: "120px", height: "120px", margin: "auto" }}>
            <img 
              alt="BAJEB" 
              src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/387797322_3659908414331570_509302908900213725_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHs7Aea0DRNYv-HijX0z6pqDcOX-o3DDIANw5f6jcMMgDeI_ADoBMYuaomhoyds9qrRaFwAogJgLzutUW01CmpX&_nc_ohc=A_X2zoioShkQ7kNvgEsbPWt&_nc_oc=AdgMQU5qDoQAzNkhFLFHzurcfT9bn1breIr1SQTVvcL4ho8xDMLw_RRhdQ0G_ISK-5s&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=AYI2uO4sM0ufuob0-GHPk7f&oh=00_AYC-r0aTC1TPJfolY1LrTnN9iFTWvZztSp-WQcYF0W-cVQ&oe=67C74219" 
              style={{ width: "100%", height: "100%", borderRadius: "50%" }} 
            />
          </IonAvatar>
          <p style={{ marginTop: "10px", fontWeight: "bold", fontSize: "16px" }}>BAJEB</p>
        </div>

      
        <IonInput 
          label="Email" 
          labelPlacement="floating" 
          value="Jboyjabeniao@gmail.com"
          onIonInput={(e) => setEmail(e.detail.value!)}
          placeholder="Enter email" 
        />

        <br />

        <IonInput 
          type="password" 
          label="Password" 
          labelPlacement="floating"
          value=" JEBBIEGANI"
          onIonInput={(e) => setPassword(e.detail.value!)}
          placeholder="Enter password"
        >
          <IonInputPasswordToggle slot="end" />
        </IonInput>

        <br />

      
        <IonButton onClick={doLogin} expand="full">
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
