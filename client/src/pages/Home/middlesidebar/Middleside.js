import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FiBook } from "react-icons/fi";
import { IoAlertCircleOutline } from "react-icons/io5";
import { TbPlayerPlayFilled } from "react-icons/tb";

export default function Middleside() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-12 mx-auto flex  items-center shadow-md px-3 ">
        <p className="text-md  gap-2 text-green-500">
          sections:
          <span className="text-black opacity-80 ml-2 ">
            the servent is depends on his lord
          </span>
        </p>
      </div>
      <div className="w-full shadow-md px-3 mt-5 ">
        <ul className="py-2">
          <li className="flex items-center text-green-600 ">
            <AiOutlineSetting className="text-xl" />
            <span className="ml-2">1. the servent is depended on his lord</span>
          </li>
          <li className="py-4 text-sm  opacity-70  ">
            The Prophet (ﷺ) said, "There are two expressions which are very easy
            for the tongue to say, but they are very heavy in the balance and
            are very dear to The Beneficent (Allah). And those are -
          </li>
          <li className="text-center">
            بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ قُلْ هُوَ اللَّـهُ أَحَدٌ
            ﴿١﴾ اللَّـهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ
          </li>

          <li className="py-4 text-sm  opacity-70  ">
            Transliteration: Bismillaahir-Rahmaanir-Raheem. (1) Qul HuwAllahu
            'Ahad. (2) Allahus-Samad. (3) Lam yalid wa lam yoolad. (4) Wa lam
            yakun lahu kufuwan 'ahad
          </li>

          <li className="py-4 text-sm  opacity-70  ">
            In a saheeh hadeeth, Mu'adh ibn Anas (RA) said: The Messenger of
            Allah (ﷺ) said: Whoever recites Surah Ikhlas 10 times, Allah will
            make a house for him in Paradise.
          </li>
          <li>
            <p className="text-green-600">References:</p>
            <span className="text-sm opacity-80  ">Surah al Fallah :32.50</span>
          </li>
        </ul>
        <div className=" flex justify-end  right-0 m-auto  pb-5">
          <ul className=" flex space-x-3 text-xl ">
            <li>
              <FaCopy />
            </li>
            <li>
              <GoLocation />
            </li>
            <li>
              <AiOutlineShareAlt />
            </li>
            <li>
              <FiBook />
            </li>
            <li>
              <IoAlertCircleOutline />
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full shadow-md px-3 mt-3 ">
        <ul className="py-4">
          <li className="flex items-center text-green-600 ">
            <AiOutlineSetting className="text-xl" />
            <span className="ml-2">2. coordinate dua is to be successfull</span>
          </li>
          <li className="py-2 text-sm  opacity-70  ">
            Prophet (ﷺ) used to say after every compulsory prayer, The servant
            will ask his Lord for all of his religiously and worldly needs,
            because the treasure of all things is in the hands of Allah. Allah
            says (interpretation of the meaning): “And there is not a thing but
            that with Us are its depositories, and We do not send it down except
            according to a known measure.” (Sura Al-Hijr 15:21) No one can
            withhold what Allah gives; And, no one can give what he resists.
          </li>
          <li className="mt-3">
            لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
            مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا
            يَنْفَعُ ذَا الْجَدِّ مِنْكَ
          </li>
          <li className="mt-3">
            Transliteration: Laa ilaaha illallahu wahdahu laa sharika lahu,
            lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir.
            Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa
            laa yanfa'u dhal-jaddi minka al-jaddu
          </li>
          <li className="mt-3">
            Translation: There is none worthy of worship except Allah alone with
            no partner or associate. He is the Dominion and to Him be all
            praise, and He is able to do all things. O Allah, one can withhold
            what You have given and none can give what You have withheld, and no
            wealth or fortune can benefit anyone for from You comes all wealth
            and fortune.
          </li>
          <li>
            <p className="text-green-600">References:</p>
            <span className="text-sm opacity-80  ">Surah al Fallah :32.50</span>
          </li>
        </ul>
        <div className=" flex justify-between  right-0 m-auto   pb-5">
          <p className="bg-green-500 h-12 w-12 flex items-center rounded-full  ">
            <TbPlayerPlayFilled className="text-3xl text-center m-auto text-white p-1 " />
          </p>
          <ul className=" flex space-x-3 text-xl ">
            <li>
              <FaCopy />
            </li>
            <li>
              <GoLocation />
            </li>
            <li>
              <AiOutlineShareAlt />
            </li>
            <li>
              <FiBook />
            </li>
            <li>
              <IoAlertCircleOutline />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
