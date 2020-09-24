awk -F, 'FNR>1 && NR==FNR{a[$1]=$2+0;next}
         FNR>1 && $3=="bipedal"{
           leg=a[$1]+0
           stride=$2+0
           speed=(leg==0 || stride == 0 ) ? 0 : ((stride / leg) - 1) * sqrt(leg * (9.8 ** 2))
           print $1, speed
          }
' dataset1.csv dataset2.csv | sort -nr -k 2|awk '{print $1}'