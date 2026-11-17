import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';
export async function POST(request:Request){
 try{const {email,locale,source}=await request.json();
 if(typeof email!=='string'||email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return NextResponse.json({error:'Invalid email'},{status:400});
 if(locale!=='en'&&locale!=='es')return NextResponse.json({error:'Invalid locale'},{status:400});
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL;const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
 if(!url||!key)return NextResponse.json({error:'Signup not configured'},{status:503});
 const db=createClient(url,key,{auth:{persistSession:false}});
 const {error}=await db.from('waitlist').upsert({email:email.trim().toLowerCase(),locale,source:typeof source==='string'?source.slice(0,80):'direct'},{onConflict:'email',ignoreDuplicates:true});
 if(error){console.error('Signup failure',error.code);return NextResponse.json({error:'Signup failed'},{status:500});}
 return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:'Invalid request'},{status:400});}
}
