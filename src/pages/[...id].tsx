import ErrorContainer from "@/components/dashboard/ErrorContainer";
import GridContainer from "@/components/dashboard/GridContainer";
import MainSkeleton from "@/components/loading/dashboard/MainSkeleton";
import { Box } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { routerLink, sentimentalData } from "../../world/atoms";
import { SentimentalAnalysisType } from "../../world/customTypes";

const Dashboard: NextPage = () => {
  const uri = useRecoilValue(routerLink);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useRecoilState(sentimentalData);

  const handler = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3000/api/dashboard`, {
        method: "POST",
        body: JSON.stringify({
          uri: uri,
        }),
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      });

      const response = await res.json();

      if (response.error) {
        throw new Error();
      }

      setLoading(false);
      setResult(response as SentimentalAnalysisType);
      console.log(response);
    } catch (e: any) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <Box sx={{ height: "100vh" }}>
      {loading && <MainSkeleton />}
      {error && <ErrorContainer />}
      {!loading && !error && result.result && <GridContainer />}
    </Box>
  );
};

export default Dashboard;
