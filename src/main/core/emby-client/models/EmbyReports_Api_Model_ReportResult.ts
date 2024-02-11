/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmbyReports_Api_Model_ReportGroup } from './EmbyReports_Api_Model_ReportGroup';
import type { EmbyReports_Api_Model_ReportHeader } from './EmbyReports_Api_Model_ReportHeader';
import type { EmbyReports_Api_Model_ReportRow } from './EmbyReports_Api_Model_ReportRow';
export type EmbyReports_Api_Model_ReportResult = {
    Rows?: Array<EmbyReports_Api_Model_ReportRow>;
    Headers?: Array<EmbyReports_Api_Model_ReportHeader>;
    Groups?: Array<EmbyReports_Api_Model_ReportGroup>;
    TotalRecordCount?: number;
    IsGrouped?: boolean;
};

