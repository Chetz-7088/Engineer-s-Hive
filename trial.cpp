  long long sum=arr[0];
        int up=0,down=0;
        vector<int> ans;
        while(!((down==n-1)&&(sum<s))||(up==n-1&&sum>s))
         {
        //      if(arr[down]>s && (down+1)<n-1)
        //   {
        //       down++;
        //       up=down;
        //       sum=arr[down];
        //   }
           if(sum<s)
           {
               down++;
               sum+=arr[down];
           }
           if(sum>s)
           {
               if(up==down && down+1<n)
               {
                   down++;
                   up=down;
                   sum=arr[down];
               }
               
           }
          
           if(sum==s)
           {
               ans.push_back(up + 1);
               ans.push_back(down + 1);
               return(ans);
           }
        }
        ans.push_back(-1);
        return ans;
    