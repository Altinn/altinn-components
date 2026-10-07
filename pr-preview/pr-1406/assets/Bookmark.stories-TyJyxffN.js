import{a7 as o}from"./iframe-CH8mgD3C.js";import{u as S}from"./useProfileLayout-6n9aPd17.js";import{u as c,B as g}from"./useBookmarks-DLY15o-O.js";import{L as k}from"./Layout-BOzR4hEv.js";import{P as x}from"./PageBase-DoHRXSs1.js";import{H as p}from"./Heading-Yz0Kaix4.js";import{T as b}from"./Toolbar-kNCnB05M.js";import{B as I}from"./BookmarkModal-DB1OMaX1.js";import{u as h}from"./useInboxLayout-BsHSx0eY.js";import{u as f}from"./useAccountMenu-DRAn8kE8.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-kUwQNS9y.js";import"./Bell-BLYdCWRE.js";import"./Bookmark-BrYxV1oH.js";import"./ClockDashed-D3VqgHdv.js";import"./globalMenu-B0yX5bgW.js";import"./PersonCircle-DOtiN3WO.js";import"./Buildings2-C_eOnXb4.js";import"./InboxFill-DDP75Wdr.js";import"./MenuGrid-BKj9o5wt.js";import"./MagnifyingGlass-BnEAksKO.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-O5mpBRtM.js";import"./Trash-BAAoSTtu.js";import"./useLayout-ahXDbfGe.js";import"./useLocale-C5jN0Mjc.js";import"./header-trUjiQcx.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BlkNFW_W.js";import"./BookmarkSettingsItem-CtIagCo2.js";import"./QueryLabel-DQAKsAS1.js";import"./Plus-OvBsSWIf.js";import"./SettingsItemBase-CONpdlrT.js";import"./ItemMedia-BK3BNMj0.js";import"./Avatar-DpRxDHCs.js";import"./AvatarGroup-B9kdZ47G.js";import"./ChevronUp-BTM5yc0u.js";import"./ChevronDown-Cn-stDPP.js";import"./ChevronRight-CQGN_WtL.js";import"./ItemBase-D0teP5S2.js";import"./ItemLink-dU306ec_.js";import"./ItemControls-dstWsIeL.js";import"./Badge-CSoF9iVN.js";import"./Tooltip-CT6ipS0w.js";import"./Typography-ClkFzU7o.js";import"./useHighlightedText-B_wEJ_uI.js";import"./ContextMenu-DPetgM9y.js";import"./useDropdownMenuController-FcQfptKr.js";import"./Dropdown-D9qzdFMY.js";import"./SearchField-UH995Up-.js";import"./FieldBase-D9urOdyW.js";import"./Field-Dls_LVcA.js";import"./Label-CqTyDT0V.js";import"./Input-Sz2FhcYy.js";import"./MenuListItem-dmpcOffB.js";import"./MenuListDivider-Dpg_gFHI.js";import"./MenuListHeading-Bwq8QFZh.js";import"./MenuItem-B2UgnfYQ.js";import"./Checkmark-BQdUfCkA.js";import"./ItemLabel-DGIpgk0p.js";import"./InformationSquare-Dm8hsCNK.js";import"./MenuElipsisHorizontal-BOQd7k3G.js";import"./Pencil-BymtTdRm.js";import"./SkipLink-71KCplzA.js";import"./CookieBanner-C7jEkkAH.js";import"./Banner-GE6f-K6T.js";import"./GlobalHeader-CyVwwBdQ.js";import"./useIsDesktop-yZuWpI0r.js";import"./GlobalAccountButton-BkrEb-fP.js";import"./Enter-nR_uMI8e.js";import"./GlobalMenuButton-CLHfKO0X.js";import"./MenuHamburger-31PylNbM.js";import"./AccountSelector-CAnGzmSM.js";import"./Switch-sgpnl_WC.js";import"./AccountMenu-0MdarHIi.js";import"./GlobalMenu-OXov9hzk.js";import"./ArrowUndo-CjwPyzKk.js";import"./Globe-MreKg2lO.js";import"./BreadcrumbsLink-BhxLV-hv.js";import"./ArrowRight-C0Td8hNJ.js";import"./Footer-BubM0sCM.js";import"./Flex-f5LhVaqN.js";import"./ButtonGroup-DasozfmK.js";import"./ButtonGroupDivider-osaYeEzB.js";import"./ChevronUpDown-BLmzrraw.js";import"./ToolbarMenu-CfRmQeBW.js";import"./ToolbarSearch-2uPYzhh9.js";import"./SettingsModal-CscdPQmC.js";import"./ModalBody-B0R0uENp.js";import"./Section-BXIrXZ89.js";import"./ButtonIcon-Cv6m6W2w.js";import"./ButtonLabel-Bl84KvUO.js";import"./TextField-BHWc_bX8.js";import"./inboxMenu-Bz20Hiq0.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const xe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,xe as __namedExportsOrder,ke as default};
