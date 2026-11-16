var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-DmXJhoHi.js";import{u as j}from"./useProfileLayout-Ds75M4Sg.js";import{u as g,B as x}from"./useBookmarks-DmBquCGU.js";import{L as k}from"./Layout-BNEsenvv.js";import{P as b}from"./PageBase-DFOvSYQ4.js";import{H as m}from"./Heading-DMD9BytY.js";import{T as I}from"./Toolbar-rxPbCSrn.js";import{B as h}from"./BookmarkModal-CAeDMcLp.js";import{u as C}from"./useInboxLayout-C1WT7zBg.js";import{u as y}from"./useAccountMenu-BXr5Zyt1.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-D7IH3NS7.js";import"./Bell-DGR2gEzk.js";import"./Bookmark-CppEiEZV.js";import"./ClockDashed-QdxModLZ.js";import"./globalMenu-DLahwfPx.js";import"./PersonCircle-IQ-zxqpB.js";import"./Buildings2-Bl73VRgn.js";import"./InboxFill-C9TQYzLh.js";import"./MenuGrid-BxNQnHbh.js";import"./MagnifyingGlass-CDTvYECp.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-C9lIxQaE.js";import"./Trash-xpT0Cazm.js";import"./useLayout-DF_OZmjT.js";import"./useLocale-BDyoPBhy.js";import"./header-DqhOB6Ar.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CAAj79LJ.js";import"./BookmarkSettingsItem-BnhyQO4y.js";import"./QueryLabel-D8Z-pXBg.js";import"./Plus-B95oMHgF.js";import"./SettingsItemBase-CiqW82Hr.js";import"./ItemMedia-BhUDoeQn.js";import"./Avatar-Ct1BUX51.js";import"./AvatarGroup-jJ6DuwRZ.js";import"./ChevronUp-kg_frLlM.js";import"./ChevronDown-CCUi9si5.js";import"./ChevronRight-BBhULSEW.js";import"./ItemBase-DxatjkN9.js";import"./ItemLink-BEcGVWl4.js";import"./ItemControls-CqWny7dI.js";import"./Badge-BPEkC0lf.js";import"./Tooltip-DWnRPb8d.js";import"./Typography-TuByLUlM.js";import"./useHighlightedText-PrDe8r-L.js";import"./ContextMenu-ONCJp8MR.js";import"./useDropdownMenuController-AOASv4wb.js";import"./Dropdown-CroQAroQ.js";import"./SearchField-CmQy5YNq.js";import"./MenuListItem-fE8Z_sJw.js";import"./MenuListDivider-DKZNTDIg.js";import"./MenuItem-C_9NXDrO.js";import"./CheckboxUncheckedIcon-THpi2fsF.js";import"./RadioUncheckedIcon-HRy4h_Iy.js";import"./ItemLabel-D6letihH.js";import"./FieldBase-BmJ_0UFe.js";import"./Field-x0yE1z9d.js";import"./Label-Dmk4_kaT.js";import"./Input-BP2xOaTX.js";import"./InformationSquare-Cf67cLsl.js";import"./Pencil-GUDMTPOZ.js";import"./SkipLink-BxnEsoeu.js";import"./CookieBanner-DZqY9auT.js";import"./Link-BjqOX3GS.js";import"./Banner-BcZHwV-S.js";import"./GlobalHeader-BpNPcjS5.js";import"./useIsDesktop-D83JTRia.js";import"./GlobalAccountButton-DM2LTbX6.js";import"./Enter-DUaYSprT.js";import"./GlobalMenuButton-BweM8LWf.js";import"./MenuHamburger-yvSkcOAR.js";import"./AccountSelector-w020BGct.js";import"./Switch-BZW1Dg-b.js";import"./AccountMenu-CsFhDjFt.js";import"./GlobalMenu-Bbgknqne.js";import"./Checkmark-DUuS217X.js";import"./ArrowUndo-B2pBTWYN.js";import"./Globe-D0j6prq4.js";import"./BreadcrumbsLink-Cb9za7U9.js";import"./ArrowRight-DuS0zOcP.js";import"./Footer-B548l57S.js";import"./Flex-B-7ly2La.js";import"./ButtonGroup-BIAjr8pe.js";import"./ButtonGroupDivider-fZuIdyGO.js";import"./ChevronUpDown-CrXGIYV3.js";import"./ToolbarMenu-D0PhR2HF.js";import"./ToolbarSearch-BWP-lc8H.js";import"./SettingsModal-CSapL9iW.js";import"./ModalBody-BU-B0KnO.js";import"./Section-Db3Vzokt.js";import"./ButtonIcon-CnF9Iw1q.js";import"./ButtonLabel-DJ2eDReA.js";import"./TextField-BxIncV3C.js";import"./inboxMenu-Csn7YFo0.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
