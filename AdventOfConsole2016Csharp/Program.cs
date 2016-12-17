using AdventOfConsole2016Csharp.DaysCsharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfConsole2016Csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            //Day5 day5 = new Day5();
            //day5.Part2();
            Day16 day16 = new Day16();
            day16.GetCheckSumBinary("10111100110001111", 272);
            day16.GetCheckSumBinary("10111100110001111", 35651584);
            Console.ReadLine();
        }
    }
}
