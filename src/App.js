import { ChakraProvider } from "@chakra-ui/react";
import TopBanner from "@components/TopBanner";
import NavBar from "@components/NavBar";
import Features from "@components/Features";
import TokenEconomy from "@components/TokenEconomy";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import ThreeTierPricing from "@components/Pricing";
import useAuth from "@hooks/useAuth";
import { toast } from "react-toastify";
import { useEffect } from "react";


const klaytn = window?.klaytn


function App() {
  const {user, setUser} = useAuth();
  useEffect(()=>{
    if(!klaytn) return;
    const account = localStorage.getItem("_user");
    const currentKaikasAccount = klaytn?.selectedAddress;

    if(!account || !currentKaikasAccount){
      setUser("");
      localStorage.removeItem("_user")
      return;
    }

    if(account === currentKaikasAccount){
      setUser(account);
      localStorage.setItem("_user",account);
    }

  },[setUser])

  useEffect(()=>{
    if(!klaytn) return;

    const handleChangeAccounts = () =>{
      if(!user) return;
      const changedAccount = klaytn?.selectedAddress;
      if(user !== changedAccount){
        toast.success(`${changedAccount.slice(0,5)}... 계정이 바뀌셨군요`);
        setUser(changedAccount);
        localStorage.setItem("_user",changedAccount);
      }
    }
    klaytn?.on("accountsChanged", handleChangeAccounts)

    return () =>{
      klaytn.removeListener("accountsChanged",handleChangeAccounts)
    }

  },[user,setUser])

  useEffect(() => {
    if (!klaytn) {
      return;
    }

    const networkObj = {
      1001: "바오밥 테스트넷",
      8217: "메인넷",
    };

    const handleNetworkChanged = () => {
      setUser("");
      localStorage.removeItem("_user");
      toast.warn(
        `네트워크가 ${
          networkObj[klaytn.networkVersion]
        }으로 바뀌었군요! 다시 로그인 해주세요~`
      );
    };

    klaytn?.on("networkChanged", handleNetworkChanged);
    return () => {
      klaytn?.removeListener("networkChanged", handleNetworkChanged);
    };
  }, [setUser]);

  return (
    <ChakraProvider>
      <NavBar />
      <TopBanner />
      <Features />
      <ThreeTierPricing />
      <TokenEconomy />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
