/* eslint-disable react-hooks/exhaustive-deps */
import ErrorContainer from "@/components/dashboard/ErrorContainer";
import GridContainer from "@/components/dashboard/GridContainer";
import MainSkeleton from "@/components/loading/dashboard/MainSkeleton";
import { Box } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { routerLink, sentimentalData } from "../../world/atoms";
import { SentimentalAnalysisType } from "../../world/customTypes";

const Dashboard: NextPage<{
  uri: string;
}> = ({ uri }) => {
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useRecoilState(sentimentalData);

  const handler = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${window.location.origin}/api/dashboard`, {
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
      {(error || result.result?.length === 0) && <ErrorContainer />}
      {!loading && !error && result.result && <GridContainer />}
    </Box>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const idArray = query.id as string[]; // Access the 'id' array from the query
  const uri = idArray.join("/"); //
  console.log("uri is", uri);

  return {
    props: {
      uri: uri,
    },
  };
};

export default Dashboard;
