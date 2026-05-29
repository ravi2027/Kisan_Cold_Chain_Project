// --- Kisan Cold Chain Multilingual AI Chatbot Assistant ---

(function() {
    const LOCALES = {
        en: {
            title: "Kisan AI Assistant",
            subtitle: "Resolving your logistics queries",
            placeholder: "Type your query...",
            welcome: "Hello! I am your Kisan AI Assistant. How can I help you manage your agricultural cold chain today?",
            chips: ["Pricing & Rates", "How to Book?", "Reefer Trucks", "Monitor Temp", "Supported Crops"],
            noMatch: "I'm sorry, I couldn't find an exact match for that query. You can ask me about cold storage bookings, temperature monitoring, reefer trucks, crop varieties, or rental rates!",
            faq: [
                {
                    keywords: ["price", "pricing", "rate", "cost", "charge", "rental", "money"],
                    response: "Our standard cold storage rate is ₹80 to ₹120 per bag (approx. 50kg) per month, depending on the crop. We offer up to 30% discount for bulk storage (above 50 tons) and active farm cooperatives."
                },
                {
                    keywords: ["book", "booking", "reserve", "store", "how to book"],
                    response: "To book cold storage or a reefer truck:\n1. Click the 'Get Started' button in the navbar.\n2. Create an account.\n3. Go to Dashboard -> Bookings and fill in your crop details, quantity, and storage duration."
                },
                {
                    keywords: ["truck", "transport", "vehicle", "reefer", "logistics", "car", "lorry"],
                    response: "We operate a fleet of IoT-enabled reefer (refrigerated) trucks ranging from 3.5 tons to 20 tons. They maintain precise temperature ranges (-18°C to +15°C) to prevent spoilage during transit."
                },
                {
                    keywords: ["temp", "temperature", "humidity", "monitor", "tracking", "warm", "cold"],
                    response: "All cold chambers are equipped with continuous IoT thermal sensors. You can check the live temperature, humidity, and ventilation status of your batch 24/7 directly from your Farmer Dashboard."
                },
                {
                    keywords: ["crop", "crops", "potato", "onion", "apple", "fruit", "vegetable", "carrot"],
                    response: "We support a wide range of crops including potatoes (2°C to 4°C), onions (0°C to 2°C, low humidity), apples (0°C to 1°C), oranges, carrots, green vegetables, and dairy products. Each crop is stored in dedicated, micro-climate controlled chambers."
                }
            ]
        },
        hi: {
            title: "किसान एआई सहायक",
            subtitle: "आपकी रसद जिज्ञासाओं का समाधान",
            placeholder: "अपनी जिज्ञासा यहाँ लिखें...",
            welcome: "नमस्ते! मैं आपका किसान एआई सहायक हूँ। आज मैं आपकी कृषि शीत गृह (कोल्ड चेन) रसद के प्रबंधन में क्या सहायता कर सकता हूँ?",
            chips: ["किराया और दरें", "बुकिंग कैसे करें?", "रेफ्रिजरेटर ट्रक", "तापमान देखें", "समर्थित फसलें"],
            noMatch: "क्षमा करें, मुझे उस प्रश्न के लिए कोई सटीक उत्तर नहीं मिला। आप मुझसे कोल्ड स्टोरेज बुकिंग, तापमान निगरानी, रेफ्रिजरेटर ट्रक, फसलों की किस्मों या किराए की दरों के बारे में पूछ सकते हैं!",
            faq: [
                {
                    keywords: ["किराया", "दर", "कीमत", "खर्च", "शुल्क", "पैसा", "रुपया", "रेट"],
                    response: "हमारा सामान्य कोल्ड स्टोरेज किराया ₹80 से ₹120 प्रति बोरी (लगभग 50 किलोग्राम) प्रति माह है, जो फसल पर निर्भर करता है। थोक भंडारण (50 टन से अधिक) और सक्रिय किसान सहकारी समितियों के लिए हम 30% तक की छूट प्रदान करते हैं।"
                },
                {
                    keywords: ["बुक", "बुकिंग", "आरक्षित", "सुरक्षित", "कैसे बुक करें", "तरीका"],
                    response: "कोल्ड स्टोरेज या रेफ्रिजरेटर ट्रक बुक करने के लिए:\n1. नेविगेशन बार में 'Get Started' बटन पर क्लिक करें।\n2. एक खाता बनाएं।\n3. डैशबोर्ड -> बुकिंग पर जाएं और अपनी फसल का विवरण, मात्रा और भंडारण अवधि भरें।"
                },
                {
                    keywords: ["ट्रक", "वाहन", "परिवहन", "रसद", "गाड़ी", "लॉरी"],
                    response: "हम 3.5 टन से 20 टन तक के आईओटी (IoT) समर्थित रेफ्रिजरेटेड ट्रकों का संचालन करते हैं। पारगमन के दौरान खराब होने से बचाने के लिए वे सटीक तापमान (-18°C से +15°C) बनाए रखते हैं।"
                },
                {
                    keywords: ["तापमान", "नमी", "गर्मी", "निगरानी", "ट्रैकिंग", "टेंपरेचर"],
                    response: "सभी कोल्ड चैंबर निरंतर IoT थर्मल सेंसर से लैस हैं। आप अपने किसान डैशबोर्ड से सीधे 24/7 अपने बैच की लाइव तापमान, आर्द्रता और वेंटिलेशन स्थिति की जांच कर सकते हैं।"
                },
                {
                    keywords: ["फसल", "आलू", "प्याज", "सेब", "फल", "सब्जी", "गाजर"],
                    response: "हम आलू (2°C से 4°C), प्याज (0°C से 2°C, कम नमी), सेब (0°C से 1°C), संतरे, गाजर, हरी सब्जियां और डेयरी उत्पादों सहित फसलों की एक विस्तृत श्रृंखला का समर्थन करते हैं। प्रत्येक फसल को समर्पित जलवायु-नियंत्रित कक्षों में संग्रहीत किया जाता है।"
                }
            ]
        },
        pa: {
            title: "ਕਿਸਾਨ ਏਆਈ ਸਹਾਇਕ",
            subtitle: "ਤੁਹਾਡੇ ਸਵਾਲਾਂ ਦਾ ਹੱਲ",
            placeholder: "ਆਪਣਾ ਸਵਾਲ ਲਿਖੋ...",
            welcome: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਕਿਸਾਨ ਏਆਈ ਸਹਾਇਕ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕੋਲਡ ਸਟੋਰੇਜ ਅਤੇ ਲੋਜਿਸਟਿਕਸ ਸੰਬੰਧੀ ਕੀ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
            chips: ["ਕਿਰਾਇਆ ਅਤੇ ਦਰਾਂ", "ਬੁਕਿੰਗ ਕਿਵੇਂ ਕਰੀਏ?", "ਰੈਫ੍ਰਿਜਰੇਟਰ ਟਰੱਕ", "ਤਾਪਮਾਨ ਦੇਖੋ", "ਫਸਲਾਂ ਦੀ ਸੂਚੀ"],
            noMatch: "ਮਾਫ਼ ਕਰਨਾ, ਮੈਨੂੰ ਇਸ ਸਵਾਲ ਦਾ ਸਹੀ ਜਵਾਬ ਨਹੀਂ ਮਿਲਿਆ। ਤੁਸੀਂ ਮੈਨੂੰ ਕੋਲਡ ਸਟੋਰੇਜ ਬੁਕਿੰਗ, ਤਾਪਮਾਨ ਨਿਗਰਾਨੀ, ਟਰੱਕ ਸੇਵਾ, ਫਸਲਾਂ ਦੀ ਕਿਸਮ ਜਾਂ ਕਿਰਾਏ ਬਾਰੇ ਪੁੱਛ ਸਕਦੇ ਹੋ!",
            faq: [
                {
                    keywords: ["ਕਿਰਾਇਆ", "ਦਰ", "ਕੀਮਤ", "ਖਰਚਾ", "ਪੈਸੇ", "ਰੇਟ"],
                    response: "ਸਾਡੀ ਕੋਲਡ ਸਟੋਰੇਜ ਦਰ ₹80 ਤੋਂ ₹120 ਪ੍ਰਤੀ ਬੋਰੀ (ਲਗਭਗ 50 ਕਿਲੋਗ੍ਰਾਮ) ਪ੍ਰਤੀ ਮਹੀਨਾ ਹੈ। ਵੱਡੀ ਮਾਤਰਾ (50 ਟਨ ਤੋਂ ਵੱਧ) ਅਤੇ ਸਹਿਕਾਰੀ ਸਭਾਵਾਂ ਲਈ 30% ਤੱਕ ਦੀ ਛੋਟ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।"
                },
                {
                    keywords: ["ਬੁੱਕ", "ਬੁਕਿੰਗ", "ਕਿਵੇਂ ਬੁੱਕ", "ਤਰੀਕਾ"],
                    response: "ਕੋਲਡ ਸਟੋਰੇਜ ਜਾਂ ਰੈਫ੍ਰਿਜਰੇਟਰ ਟਰੱਕ ਬੁੱਕ ਕਰਨ ਲਈ:\n1. ਨੇਵੀਗੇਸ਼ਨ ਬਾਰ ਵਿੱਚ 'Get Started' ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।\n2. ਆਪਣਾ ਖਾਤਾ ਬਣਾਓ।\n3. ਡੈਸ਼ਬੋਰਡ -> ਬੁਕਿੰਗਜ਼ 'ਤੇ ਜਾ ਕੇ ਆਪਣੀ ਫਸਲ ਦਾ ਵੇਰਵਾ, ਮਾਤਰਾ ਅਤੇ ਸਮਾਂ ਭਰੋ।"
                },
                {
                    keywords: ["ਟਰੱਕ", "ਗੱਡੀ", "ਲੋਜਿਸਟਿਕਸ", "ਟਰਾਂਸਪੋਰਟ", "ਲਾਰੀ"],
                    response: "ਸਾਡੇ ਕੋਲ 3.5 ਟਨ ਤੋਂ 20 ਟਨ ਤੱਕ ਦੇ ਆਈਓਟੀ (IoT) ਤਕਨੀਕ ਵਾਲੇ ਰੈਫ੍ਰਿਜਰੇਟਿਡ ਟਰੱਕ ਹਨ, ਜੋ ਸਫ਼ਰ ਦੌਰਾਨ ਸਹੀ ਤਾਪਮਾਨ (-18°C ਤੋਂ +15°C) ਬਣਾਈ ਰੱਖਦੇ ਹਨ।"
                },
                {
                    keywords: ["ਤਾਪਮਾਨ", "ਗਰਮੀ", "ਨਮੀ", "ਚੈੱਕ", "ਥਰਮਲ"],
                    response: "ਸਾਰੇ ਕੋਲਡ ਚੈਂਬਰਾਂ ਵਿੱਚ IoT ਤਾਪਮਾਨ ਸੈਂਸਰ ਲੱਗੇ ਹੋਏ ਹਨ। ਤੁਸੀਂ ਆਪਣੇ ਕਿਸਾਨ ਡੈਸ਼ਬੋਰਡ ਤੋਂ 24 ਘੰਟੇ ਆਪਣੀ ਫਸਲ ਦਾ ਲਾਈਵ ਤਾਪਮਾਨ ਅਤੇ ਨਮੀ ਦੇਖ ਸਕਦੇ ਹੋ।"
                },
                {
                    keywords: ["ਫਸਲ", "ਆਲੂ", "ਪਿਆਜ਼", "ਸੇਬ", "ਸਬਜ਼ੀ", "ਗਾਜਰ"],
                    response: "ਅਸੀਂ ਆਲੂ (2°C ਤੋਂ 4°C), ਪਿਆਜ਼ (0°C ਤੋਂ 2°C), ਸੇਬ (0°C ਤੋਂ 1°C), ਗਾਜਰ, ਹਰੀਆਂ ਸਬਜ਼ੀਆਂ ਅਤੇ ਦੁੱਧ ਦੇ ਉਤਪਾਦਾਂ ਨੂੰ ਸਟੋਰ ਕਰ ਸਕਦੇ ਹਾਂ। ਹਰ ਫਸਲ ਲਈ ਵੱਖਰਾ ਤਾਪਮਾਨ ਕੰਟਰੋਲ ਚੈਂਬਰ ਹੁੰਦਾ ਹੈ।"
                }
            ]
        },
        ta: {
            title: "கிசான் AI உதவியாளர்",
            subtitle: "உங்கள் கேள்விகளுக்கான தீர்வு",
            placeholder: "கேள்வியைக் கேட்கவும்...",
            welcome: "வணக்கம்! நான் உங்கள் கிசான் AI உதவியாளர். இன்று உங்கள் குளிர்பதன கிடங்கு மற்றும் போக்குவரத்து தேவைகளை எவ்வாறு நிர்வகிக்க உதவட்டும்?",
            chips: ["கட்டணம் மற்றும் விகிதங்கள்", "புக் செய்வது எப்படி?", "குளிரூட்டப்பட்ட லாரிகள்", "வெப்பநிலை பார்க்க", "ஆதரிக்கப்படும் பயிர்கள்"],
            noMatch: "மன்னிக்கவும், அந்த கேள்விக்கு என்னிடம் பதில் இல்லை. நீங்கள் குளிர்பதன கிடங்கு புக்கிங், வெப்பநிலை கண்காணிப்பு, லாரிகள், பயிர் வகைகள் அல்லது வாடகை விகிதங்கள் பற்றி கேட்கலாம்!",
            faq: [
                {
                    keywords: ["விலை", "கட்டணம்", "வாடகை", "செலவு", "பணம்", "விகிதம்"],
                    response: "பயிரைப் பொறுத்து குளிர்சாதன கிடங்கு கட்டணம் மூட்டைக்கு (சுமார் 50 கிலோ) மாதத்திற்கு ₹80 முதல் ₹120 வரை இருக்கும். மொத்த சேமிப்புக்கு (50 டன்களுக்கு மேல்) 30% வரை தள்ளுபடி வழங்கப்படுகிறது."
                },
                {
                    keywords: ["புக்", "புக்கிங்", "பதிவு", "செய்ய"],
                    response: "குளிர்பதன கிடங்கு அல்லது லாரி பதிவு செய்ய:\n1. மேல் பட்டியில் உள்ள 'Get Started' பொத்தானைக் கிளிக் செய்யவும்.\n2. கணக்கை உருவாக்கவும்.\n3. டாஷ்போர்டு -> புக்கிங் பகுதிக்குச் சென்று விவரங்களை உள்ளிடவும்."
                },
                {
                    keywords: ["லாரி", "வண்டி", "போக்குவரத்து", "லாரிகள்", "வாகனம்"],
                    response: "எங்களிடம் 3.5 டன் முதல் 20 டன் வரையிலான IoT இயக்கப்பட்ட குளிரூட்டப்பட்ட லாரிகள் உள்ளன. இவை போக்குவரத்தின் போது வெப்பநிலை மாறாமல் (-18°C முதல் +15°C) பாதுகாக்கும்."
                },
                {
                    keywords: ["வெப்பநிலை", "ஈரப்பதம்", "காற்றோட்டம்", "டிகிரி"],
                    response: "அனைத்து குளிர்பதன அறைகளும் IoT சென்சார்களுடன் இணைக்கப்பட்டுள்ளன. உங்கள் டாஷ்போர்டில் இருந்து 24/7 நேரடி வெப்பநிலை மற்றும் ஈரப்பதத்தை நீங்கள் சரிபார்க்கலாம்."
                },
                {
                    keywords: ["பயிர்", "உருளை", "வெங்காயம்", "ஆப்பிள்", "காய்", "பழம்", "கேரட்"],
                    response: "உருளைக்கிழங்கு (2°C to 4°C), வெங்காயம் (0°C to 2°C), ஆப்பிள் (0°C to 1°C), கேரட், மற்றும் பால் பொருட்களைப் பாதுகாக்க எங்களிடம் தனித்தனி வெப்பநிலை அறைகள் உள்ளன."
                }
            ]
        },
        te: {
            title: "కిసాన్ AI సహాయకుడు",
            subtitle: "మీ రవాణా ప్రశ్నల పరిష్కారం",
            placeholder: "మీ ప్రశ్న ఇక్కడ రాయండి...",
            welcome: "నమస్కారం! నేను మీ కిసాన్ AI సహాయకుడిని. ఈ రోజు మీ కోల్డ్ స్టోరేజ్ మరియు రవాణా నిర్వహణలో మీకు ఎలా సహాయం చేయగలను?",
            chips: ["ధరలు & రేట్లు", "బుకింగ్ ఎలా చేయాలి?", "కోల్డ్ ట్రక్కులు", "ఉష్ణోగ్రత చూడండి", "పంటల రకాలు"],
            noMatch: "క్షమించండి, మీ ప్రశ్నకు సరిపోయే సమాధానం లభించలేదు. మీరు నన్ను కోల్డ్ స్టోరేజ్ బుకింగ్స్, టెంపరేచర్ మానిటరింగ్, కోల్డ్ ట్రక్కులు, పంటల రకాలు లేదా రేట్ల గురించి అడగవచ్చు!",
            faq: [
                {
                    keywords: ["ధర", "రేటు", "కిరాయి", "ఖర్చు", "డబ్బులు", "రేట్లు"],
                    response: "పంటను బట్టి కోల్డ్ స్టోరేజ్ ధర నెలకు ప్రతి బస్తాకు (సుమారు 50 కిలోలు) ₹80 నుండి ₹120 వరకు ఉంటుంది. పెద్ద మొత్తంలో (50 టన్నుల కంటే ఎక్కువ) నిల్వ చేసే రైతులకు 30% వరకు తగ్గింపు లభిస్తుంది."
                },
                {
                    keywords: ["బుక్", "బుకింగ్", "ఎలా బుక్ చేయాలి", "విధానం"],
                    response: "కోల్డ్ స్టోరేజ్ లేదా కోల్డ్ ట్రక్ బుకింగ్ కోసం:\n1. నేవిగేషన్ బార్‌లోని 'Get Started' బటన్‌పై క్లిక్ చేయండి.\n2. అకౌంట్ క్రియేట్ చేసుకోండి.\n3. డాష్‌బోర్డ్ -> బుకింగ్స్ కి వెళ్లి మీ పంట వివరాలు, పరిమాణం మరియు నిల్వ వ్యవధిని నమోదు చేయండి."
                },
                {
                    keywords: ["ట్రక్", "వాహనం", "రవాణా", "బండి", "లారీ"],
                    response: "మా వద్ద 3.5 టన్నుల నుండి 20 టన్నుల వరకు IoT ఆధారిత కోల్డ్ ట్రక్కులు ఉన్నాయి. ఇవి రవాణా సమయంలో పంట పాడవ్వకుండా కచ్చితమైన ఉష్ణోగ్రత (-18°C నుండి +15°C) నిర్వహిస్తాయి."
                },
                {
                    keywords: ["ఉష్ణోగ్రత", "టెంపరేచర్", "తేమ", "చలి"],
                    response: "అన్ని కోల్డ్ చాంబర్లు నిరంతర IoT సెన్సార్లతో అమర్చబడి ఉన్నాయి. మీ రైతు డాష్‌బోర్డ్ నుండి మీ పంట బ్యాచ్ యొక్క ప్రత్యక్ష ఉష్ణోగ్రతను 24/7 చూసుకోవచ్చు."
                },
                {
                    keywords: ["పంట", "బంగాళదుంప", "ఉల్లిపాయ", "ఆపిల్", "కూరగాయలు", "క్యారెట్"],
                    response: "మేము బంగాళదుంపలు (2°C నుండి 4°C), ఉల్లిపాయలు (0°C నుండి 2°C), ఆపిల్స్ (0°C నుండి 1°C), క్యారెట్లు, కూరగాయలు మరియు పాల ఉత్పత్తులను భద్రపరచడానికి ప్రత్యేక ఉష్ణోగ్రత గదులను కలిగి ఉన్నాము."
                }
            ]
        }
    };

    let activeLang = localStorage.getItem('chat_lang') || 'en';

    // Inject custom chatbot elements
    function initChatbot() {
        if (document.getElementById('kisan-chatbot-fab')) return; // Already loaded

        // Create FAB
        const fab = document.createElement('button');
        fab.id = 'kisan-chatbot-fab';
        fab.className = 'fixed bottom-6 right-6 w-14 h-14 bg-green-950 text-white rounded-full shadow-2xl flex items-center justify-center border border-green-800 focus:outline-none hover:scale-105 active:scale-95 transition-all duration-300';
        fab.style.zIndex = '999999';
        fab.style.cursor = 'pointer';
        
        // Dynamic pulse ring
        fab.innerHTML = `
            <span class="absolute inset-0 rounded-full bg-green-950 animate-ping opacity-25"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-more w-6 h-6 text-white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
        `;

        // Create Chat Widget Panel
        const panel = document.createElement('div');
        panel.id = 'kisan-chatbot-panel';
        panel.className = 'hidden fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[380px] h-[70vh] sm:h-[520px] bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl flex-col overflow-hidden transition-all duration-300 transform scale-95 opacity-0 origin-bottom-right';
        panel.style.zIndex = '999999';

        // Chat Widget HTML Structure
        panel.innerHTML = `
            <!-- Header -->
            <div class="p-4 bg-gradient-to-r from-green-950 to-green-900 dark:from-stone-950 dark:to-stone-900 text-white flex items-center justify-between border-b border-green-900 dark:border-stone-800">
                <div class="flex items-center gap-2.5">
                    <div class="relative">
                        <div class="w-9 h-9 bg-green-900/50 rounded-full flex items-center justify-center border border-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                        </div>
                        <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-white dark:border-stone-900 rounded-full"></span>
                    </div>
                    <div>
                        <div id="chat-title" class="font-heading font-semibold text-sm leading-none text-white"></div>
                        <div id="chat-subtitle" class="text-[10px] text-green-300 dark:text-stone-400 mt-1"></div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <select id="chat-lang-select" class="bg-green-900/60 dark:bg-stone-800/80 text-white text-xs border border-green-700 dark:border-stone-700 rounded px-1.5 py-0.5 focus:outline-none cursor-pointer">
                        <option value="en">English</option>
                        <option value="hi">हिन्दी (Hindi)</option>
                        <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
                        <option value="ta">தமிழ் (Tamil)</option>
                        <option value="te">తెలుగు (Telugu)</option>
                    </select>
                    <button id="chat-close" class="p-1 hover:bg-white/10 rounded transition-colors text-white focus:outline-none cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4.5 h-4.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
            </div>

            <!-- Messages Area -->
            <div id="chat-messages" class="flex-1 p-4 overflow-y-auto space-y-3 bg-stone-50 dark:bg-stone-950 flex flex-col"></div>

            <!-- Chips Area -->
            <div id="chat-chips" class="px-4 py-2 bg-stone-50 dark:bg-stone-950 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none border-t border-stone-100 dark:border-stone-800"></div>

            <!-- Input Area -->
            <form id="chat-form" class="p-3 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 flex items-center gap-2">
                <input id="chat-input" type="text" autocomplete="off" class="flex-1 text-sm bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg px-3.5 py-2 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-green-800 dark:focus:border-green-600 transition-colors" />
                <button type="submit" class="bg-green-950 hover:bg-green-900 text-white rounded-lg p-2 flex items-center justify-center focus:outline-none transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4.5 h-4.5 text-white transform rotate-45 -translate-x-0.5 translate-y-0.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </form>
        `;

        document.body.appendChild(fab);
        document.body.appendChild(panel);

        // Bind interactive events
        const chatInput = document.getElementById('chat-input');
        const langSelect = document.getElementById('chat-lang-select');
        const chatClose = document.getElementById('chat-close');
        const chatForm = document.getElementById('chat-form');

        // Set selected lang in dropdown
        langSelect.value = activeLang;

        // Toggle chat panel open/close
        fab.addEventListener('click', () => {
            const isHidden = panel.classList.contains('hidden');
            if (isHidden) {
                // Open panel
                panel.classList.remove('hidden');
                panel.style.display = 'flex';
                setTimeout(() => {
                    panel.classList.remove('scale-95', 'opacity-0');
                    panel.classList.add('scale-100', 'opacity-100');
                }, 10);
                // Reset to welcome if empty
                const msgs = document.getElementById('chat-messages');
                if (msgs.children.length === 0) {
                    resetChatMessages();
                }
            } else {
                closeChatPanel();
            }
        });

        chatClose.addEventListener('click', closeChatPanel);

        // Change language event
        langSelect.addEventListener('change', (e) => {
            activeLang = e.target.value;
            localStorage.setItem('chat_lang', activeLang);
            updateChatLocale();
            resetChatMessages();
        });

        // Submit query form
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;
            chatInput.value = '';
            handleUserMessage(text);
        });

        // Initialize display content
        updateChatLocale();
    }

    function closeChatPanel() {
        const panel = document.getElementById('kisan-chatbot-panel');
        if (!panel) return;
        panel.classList.remove('scale-100', 'opacity-100');
        panel.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            panel.classList.add('hidden');
            panel.style.display = 'none';
        }, 300);
    }

    // Update static interface elements matching language
    function updateChatLocale() {
        const t = LOCALES[activeLang];
        document.getElementById('chat-title').textContent = t.title;
        document.getElementById('chat-subtitle').textContent = t.subtitle;
        document.getElementById('chat-input').placeholder = t.placeholder;

        // Populate prompt suggestion chips
        const chipsArea = document.getElementById('chat-chips');
        chipsArea.innerHTML = '';
        t.chips.forEach(chip => {
            const el = document.createElement('button');
            el.className = 'px-3 py-1.5 bg-stone-200/65 hover:bg-stone-300/80 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full text-xs transition-colors focus:outline-none cursor-pointer';
            el.textContent = chip;
            el.addEventListener('click', () => {
                handleUserMessage(chip);
            });
            chipsArea.appendChild(el);
        });
    }

    // Reset list and append welcome bubble
    function resetChatMessages() {
        const msgs = document.getElementById('chat-messages');
        msgs.innerHTML = '';
        appendMessage('bot', LOCALES[activeLang].welcome);
    }

    // Append standard message bubble to the list
    function appendMessage(sender, text) {
        const msgs = document.getElementById('chat-messages');
        const container = document.createElement('div');
        container.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'} w-full`;

        const bubble = document.createElement('div');
        bubble.className = `max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm transition-all duration-200 ${
            sender === 'user'
                ? 'bg-green-950 text-white rounded-br-none'
                : 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 border border-stone-100 dark:border-stone-700 rounded-bl-none'
        }`;
        // Preserve newlines in formatting
        bubble.style.whiteSpace = 'pre-line';
        bubble.textContent = text;

        container.appendChild(bubble);
        msgs.appendChild(container);
        msgs.scrollTop = msgs.scrollHeight;
    }

    // Append typing bubble
    function appendTypingIndicator() {
        const msgs = document.getElementById('chat-messages');
        const container = document.createElement('div');
        container.id = 'chat-typing';
        container.className = 'flex justify-start w-full';

        const bubble = document.createElement('div');
        bubble.className = 'bg-white dark:bg-stone-800 text-stone-500 dark:text-stone-400 border border-stone-100 dark:border-stone-700 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center shadow-sm';
        bubble.innerHTML = `
            <span class="w-1.5 h-1.5 bg-stone-400 dark:bg-stone-500 rounded-full animate-bounce"></span>
            <span class="w-1.5 h-1.5 bg-stone-400 dark:bg-stone-500 rounded-full animate-bounce" style="animation-delay: 0.15s"></span>
            <span class="w-1.5 h-1.5 bg-stone-400 dark:bg-stone-500 rounded-full animate-bounce" style="animation-delay: 0.3s"></span>
        `;

        container.appendChild(bubble);
        msgs.appendChild(container);
        msgs.scrollTop = msgs.scrollHeight;
    }

    function removeTypingIndicator() {
        const el = document.getElementById('chat-typing');
        if (el) el.remove();
    }

    // Resolves query answering logic with typing delay simulation
    function handleUserMessage(text) {
        appendMessage('user', text);
        appendTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            const botResponse = solveQuery(text);
            appendMessage('bot', botResponse);
        }, 750);
    }

    // Main local AI multilingual query solver engine
    function solveQuery(query) {
        const cleanQuery = query.toLowerCase().trim();
        const t = LOCALES[activeLang];

        // Fuzzy match keywords in the active locale
        for (const item of t.faq) {
            const hasMatch = item.keywords.some(keyword => {
                const cleanKeyword = keyword.toLowerCase();
                return cleanQuery.includes(cleanKeyword) || cleanKeyword.includes(cleanQuery);
            });
            if (hasMatch) {
                return item.response;
            }
        }

        // Fallback response if no keywords hit
        return t.noMatch;
    }

    // Trigger injection post DOM loading
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }

    // Interval fallback to guarantee presence on hot updates / re-renders
    setInterval(initChatbot, 1000);
})();
