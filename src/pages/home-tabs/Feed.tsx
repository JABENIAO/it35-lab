import { 
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';

const Favorites: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Feed</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonCard>
                    {/* First Card Image */}
                    <img
                        alt="Card Image"
                        src="https://s.yimg.com/uu/api/res/1.2/UkaTnn1efPY5jrLRQ7pIoQ--~B/Zmk9ZmlsbDtoPTY5MjtweW9mZj0wO3c9MTIzMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2025-03/f53ecfe0-fb29-11ef-bffd-9456fe9220ab"
                        style={{
                            width: "100%", 
                            borderTopLeftRadius: "8px", 
                            borderTopRightRadius: "8px"
                        }}
                    />

                    <IonCardHeader>
                        <IonCardTitle>LUCA TRADE?</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        In February 2025, the Los Angeles Lakers acquired Luka Dončić from the Dallas Mavericks in a significant trade. This deal also involved the Utah Jazz and included the following key exchanges:
                    </IonCardContent>

                    <IonButton fill="clear">Agree?</IonButton>
                    <IonButton fill="clear">Disagree?</IonButton>
                </IonCard>

                {}
                <img
                    alt="Card Image"
                    src="https://www.bing.com/th?id=OSB.285FA0651D8999D153FF285FA0651D8999D153FF&w=300&h=168&qlt=90&c=1&rs=1&dpr=2&p=0"
                    style={{
                        width: "100%", 
                        borderTopLeftRadius: "8px", 
                        borderTopRightRadius: "8px"
                    }}
                />

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>DALLAS VS BUCKS</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        In their March 5, 2025, matchup, the Milwaukee Bucks defeated the Dallas Mavericks 137-107. Giannis Antetokounmpo led the Bucks with 32 points, surpassing the 20,000 career points milestone.
                    </IonCardContent>

                    <IonButton fill="clear">Agree?</IonButton>
                    <IonButton fill="clear">Disagree?</IonButton>
                </IonCard>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    Feed
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Favorites;
