using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfConsole2016Csharp.DaysCsharp
{
    public class Day5
    {
        private bool hashValid(string input)
        {
            for (var i = 0; i < 5; i++)
            {
                if (input[i] != '0')
                {
                    return false;
                }
            }
            return true;
        }

        public void Part2()
        {
            Stopwatch sw = new Stopwatch();
            sw.Start();
            string input = "ojvtpuvg";
            int value = 0;
            int currentLength = 0;
            string result = "________";
            string newValue = "";
            string hash = "";
            MD5 md5Hash = MD5.Create();
            while (currentLength < 8)
            {
                newValue = input + value;

                var bytes = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(newValue));
                var s = new StringBuilder();
                foreach (byte b in bytes)
                {
                    s.Append(b.ToString("x2"));
                }
                hash = s.ToString();

                if (hashValid(hash))
                {
                    try
                    {
                        var position = int.Parse(hash[5].ToString());
                        if (position < 8 && result[position] == '_')
                        {
                            StringBuilder sb = new StringBuilder(result);
                            sb[position] = hash[6];
                            result = sb.ToString();
                            currentLength++;
                        }
                    }
                    catch { };
                }
                value++;
            }
            sw.Stop();
            Console.WriteLine("{0} - {1}", result, sw.Elapsed.TotalSeconds);
            Console.ReadLine();
        }
    }
}
