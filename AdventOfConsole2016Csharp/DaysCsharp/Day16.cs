using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace AdventOfConsole2016Csharp.DaysCsharp
{
    public class Day16
    {

        public void GetCheckSum(string input, int length)
        {
            Stopwatch sw = new Stopwatch();
            sw.Start();
            StringBuilder sb = new StringBuilder();
            sb.Append(input);
            while (sb.Length < length)
            {
                sb.Append('0');
                for (var i = sb.Length - 2; i >= 0; i--)
                {
                    sb.Append(sb[i] == '0' ? '1' : '0');
                    if (sb.Length == length)
                        break;
                }
                Console.WriteLine(sb.Length);
            }
            while (sb.Length %2 == 0)
            {
                StringBuilder sbNew = new StringBuilder();
                for (var i = 0; i < sb.Length; i += 2)
                {
                    sbNew.Append(sb[i] == sb[i + 1] ? '1' : '0');
                }
                sb = sbNew;
                Console.WriteLine(sb.Length);
            }

            sw.Stop();
            Console.WriteLine("{0} - {1}", sb.ToString(), sw.Elapsed.TotalSeconds);
        }

        public void GetCheckSumBinary(string input, int length)
        {
            Stopwatch sw = new Stopwatch();
            sw.Start();
            Byte one = 1;
            Byte zero = 0;
            var sb = Regex.Split(input, string.Empty).Where(i => !string.IsNullOrEmpty(i)).Select(Byte.Parse).ToList();
            while (sb.Count < length)
            {
                sb.Add(0);
                for (var i = sb.Count - 2; i >= 0; i--)
                {
                    sb.Add(sb[i] == zero ? one : zero);
                    //sb.Append(sb[i] == '0' ? '1' : '0');
                    if (sb.Count == length)
                        break;
                }
                Console.WriteLine(sb.Count);
            }
            while (sb.Count % 2 == 0)
            {
                List<Byte> sbNew = new List<byte>();
                for (var i = 0; i < sb.Count; i += 2)
                {
                    sbNew.Add(sb[i] == sb[i + 1] ? one : zero);
                }
                sb = sbNew;
                Console.WriteLine(sb.Count);
            }

            sw.Stop();
            Console.WriteLine("{0} - {1}", String.Join("", sb), sw.Elapsed.TotalSeconds);
        }
    }
}
