var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-CFooeFlc.js";import{u as j}from"./useProfileLayout-TtEfxYTs.js";import{u as g,B as x}from"./useBookmarks-D0a3c0rr.js";import{L as k}from"./Layout-BlHJit78.js";import{P as b}from"./PageBase-DlZj6Gt8.js";import{H as m}from"./Heading-BvwzGhlC.js";import{T as I}from"./Toolbar-DAk2GL7Y.js";import{B as h}from"./BookmarkModal-CLi5w-Yt.js";import{u as C}from"./useInboxLayout-CH8_tVTk.js";import{u as y}from"./useAccountMenu-CHt8fAhr.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DdHcHph9.js";import"./Bell-s-5O088M.js";import"./Bookmark-Ddp9wjen.js";import"./ClockDashed-DQ2vcEGV.js";import"./globalMenu-V79Pn2VS.js";import"./PersonCircle-dY6cP1lV.js";import"./Buildings2-BcXb6UsZ.js";import"./InboxFill-C_9JPAbS.js";import"./MenuGrid-2a9RgC_E.js";import"./MagnifyingGlass-BeyjX3_h.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Cn31xRbo.js";import"./Trash-RDp0u5kC.js";import"./useLayout-D30LU4br.js";import"./useLocale-BBBFsIWT.js";import"./header-DWjctTLs.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Bq9-gO9j.js";import"./BookmarkSettingsItem-CiVDaVLE.js";import"./QueryLabel-CrP2lDdF.js";import"./Plus-uOOnNtuS.js";import"./SettingsItemBase-BAljSDAd.js";import"./ItemMedia-BiITU9Jf.js";import"./Avatar-BMLgJvdJ.js";import"./AvatarGroup-O59IIMZ1.js";import"./ChevronUp-2AABqykr.js";import"./ChevronDown-DRjCt-FM.js";import"./ChevronRight-Pp6aFK2W.js";import"./ItemBase-DLuyWZHy.js";import"./ItemLink-CYYhjNlX.js";import"./ItemControls-a2iPy1rh.js";import"./Badge-4L7pEK9S.js";import"./Tooltip-Dsu4-yLP.js";import"./Typography-DZMMTX6d.js";import"./useHighlightedText-CSeb_EVo.js";import"./ContextMenu-DoDNTdiW.js";import"./useDropdownMenuController-D2ORC09B.js";import"./Dropdown-UxeuVY1V.js";import"./SearchField-vc2j7DYW.js";import"./MenuListItem-lDH_nIX2.js";import"./MenuListDivider-DbxP2E3y.js";import"./MenuItem-Bf8xgsdL.js";import"./CheckboxUncheckedIcon-BUUPFL_h.js";import"./RadioUncheckedIcon-SM_w6gXN.js";import"./ItemLabel-uOYlRqGI.js";import"./FieldBase--dF0uMSe.js";import"./Field-XgzC0Js-.js";import"./Label-BITGJPso.js";import"./Input-CijTBA3T.js";import"./InformationSquare-CkGSwppR.js";import"./Pencil-DLJm7cTM.js";import"./SkipLink-CvhSBmX4.js";import"./CookieBanner-gpoAWfQo.js";import"./Link-CAZN9a6X.js";import"./Banner-veWYbJJ0.js";import"./GlobalHeader-CAxn3FbR.js";import"./useIsDesktop-DMKYuN7Q.js";import"./GlobalAccountButton-CxUertbH.js";import"./Enter-Bl8n-sGa.js";import"./GlobalMenuButton-BefVXzoE.js";import"./MenuHamburger-BBOi02AU.js";import"./AccountSelector-B4QhyC5f.js";import"./Switch-XnFFT3OB.js";import"./AccountMenu-CyQLONBq.js";import"./GlobalMenu-D8aETKbm.js";import"./Checkmark-CL0UyCZk.js";import"./ArrowUndo-Bq7mvHQO.js";import"./Globe-ASfh3ELd.js";import"./BreadcrumbsLink-DQSRC3y-.js";import"./ArrowRight-CiUYzs3Y.js";import"./Footer-B1HwsH9k.js";import"./Flex-DvJJETpK.js";import"./ButtonGroup-B1Q8fC_M.js";import"./ButtonGroupDivider-CNEu50cf.js";import"./ChevronUpDown-B5XyDIBr.js";import"./ToolbarMenu-BNIlYdJG.js";import"./ToolbarSearch-D3th_CqE.js";import"./SettingsModal-DXbxrgRv.js";import"./ModalBody-DNdyJsNZ.js";import"./Section-Dn7ldTEr.js";import"./ButtonIcon-CPVBizt7.js";import"./ButtonLabel-XFoSX1pU.js";import"./TextField-DSwS7d_E.js";import"./inboxMenu-i03i7qEu.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
