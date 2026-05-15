import{j as o}from"./iframe-CZMLD2fe.js";import{u as h}from"./useInboxLayout-CNDtdM_f.js";import{u as j}from"./useAccountMenu-BUPU4Djz.js";import{u as c,B as g}from"./useBookmarks-BRb_8s8O.js";import{L as k}from"./Layout-DQnnzWtu.js";import{P as x}from"./PageBase-DHcq2BZc.js";import{H as p}from"./Heading-5rlhad8Q.js";import{T as b}from"./Toolbar-BFeDuU1G.js";import{B as I}from"./BookmarkModal-BInDqwSC.js";import{u as S}from"./useProfileLayout-CcamlspR.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-CJBmL2I0.js";import"./InboxFill-dmJCO2GG.js";import"./useId-Dmu9AgSD.js";import"./Plus-2Q0T7s3R.js";import"./PersonCircle-Cnz-oc73.js";import"./Bookmark-BvWd1gs8.js";import"./Archive-DXvpD1-K.js";import"./Trash-CFAM7fxG.js";import"./InformationSquare-BauCIT4L.js";import"./globalMenu-CThTZovX.js";import"./Buildings2-Cd8pIexL.js";import"./MenuGrid-GwGTD_sm.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-_ltsB0Y1.js";import"./useLocale-CbEV2YSF.js";import"./header-DP5aZFPj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-Bo9xq64m.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DP-yJAQd.js";import"./QueryLabel-CdbQAGT7.js";import"./SettingsItemBase-C4lOIklE.js";import"./ChevronUp-C_Nv0CUA.js";import"./ChevronDown-Bjx7qU4A.js";import"./ChevronRight-7zRCvc5i.js";import"./ItemLink-D5-BdpwL.js";import"./index-iGjPLQV7.js";import"./ItemMedia-CE_zTi22.js";import"./XMark-BBRiAlI8.js";import"./Avatar-DzGFAhDt.js";import"./Skeleton-D52MvI5U.js";import"./AvatarGroup-sNwukvT8.js";import"./Icon-CbE8dCFV.js";import"./ItemControls-CSi2HZsx.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-BegW4Ytw.js";import"./useHighlightedText-CmlayFSP.js";import"./ContextMenu-DZna9DPo.js";import"./useDropdownMenuController-Dm3dzHc4.js";import"./Dropdown-Bx0d8Qo_.js";import"./MenuElipsisHorizontal-C-D0tdFp.js";import"./SearchField-hPGSgF9W.js";import"./FieldBase-bsYRos9m.js";import"./Label-C0JPWrbN.js";import"./index-DZ8nICMn.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./MenuItem-BQTFtYYp.js";import"./Checkmark-CgCD7cxb.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./Pencil-DuA10xP9.js";import"./SkipLink-Bfb9RqDO.js";import"./Banner-DbuB4eJf.js";import"./GlobalHeader-Bdoxbjrg.js";import"./useIsDesktop-DX1vl52f.js";import"./GlobalAccountButton-DltMrGPB.js";import"./Enter-B5HAdrS7.js";import"./GlobalMenuButton-BbcRNqJQ.js";import"./MenuHamburger-CM7Wkn6q.js";import"./AccountSelector-ScZw3yb8.js";import"./heading-BH75kNw6.js";import"./AccountMenu-CfO1iyk0.js";import"./Switch-k_GymHg0.js";import"./GlobalMenu-DqWSpTc_.js";import"./ArrowUndo-CgL76AqI.js";import"./Globe-BgtTiwhv.js";import"./BreadcrumbsLink-UczRN22v.js";import"./ArrowRight-DPzNdnaJ.js";import"./Footer-DNF3SlSL.js";import"./Flex-oWhCvzqt.js";import"./ChevronUpDown-CYrJfMm2.js";import"./ButtonGroup-lppFG0T2.js";import"./ButtonGroupDivider-Bg56f6eB.js";import"./ToolbarMenu-Dtr-9pM9.js";import"./ToolbarSearch-Bxg4abWw.js";import"./SettingsModal-BPOEW54D.js";import"./ModalBody-COFFml6R.js";import"./Section-B1dSFwPq.js";import"./ButtonIcon-BscAx0sF.js";import"./ButtonLabel-k_kFU7aM.js";import"./TextField-DWuCPUHk.js";import"./Bell-gRSHSOzF.js";import"./ClockDashed-RUw66Dcn.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};const fe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,fe as __namedExportsOrder,Se as default};
