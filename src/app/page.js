 'use client'
 import Link from "next/link";
 import { useRouter } from "next/navigation";
export default function Home() {


  const router = useRouter();
  console.log(router);

  const useNavigate = () => {
    router.push('/products');
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">



      <h1>
        Main Page
      </h1>
      <Link href={'/products'}>Products Page</Link>
      <Link href={'/accounts'}>Accounts Page</Link>

      <h1 className="font-bold capitalize">
        another way to navigate
      </h1>
      <button onClick={useNavigate}>Products Page(useRouter)</button>
    </main>
  );
}
