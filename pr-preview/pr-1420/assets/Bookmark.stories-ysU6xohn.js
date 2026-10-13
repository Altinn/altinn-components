import{a7 as o}from"./iframe-BbHZTISi.js";import{u as S}from"./useProfileLayout-DE6gtKdl.js";import{u as c,B as g}from"./useBookmarks-D9Ifi_i5.js";import{L as k}from"./Layout-DraIl44Y.js";import{P as x}from"./PageBase-DGp6Zx-T.js";import{H as p}from"./Heading-Bg_B2C5V.js";import{T as b}from"./Toolbar-BB0p5G7l.js";import{B as I}from"./BookmarkModal-BnQ86TzB.js";import{u as h}from"./useInboxLayout-5ZaEW7pU.js";import{u as f}from"./useAccountMenu-K_0K5fak.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-DRSvxFWE.js";import"./Bell-8Dz5_7Jj.js";import"./Bookmark-CQuSV28i.js";import"./ClockDashed-wDeFYimQ.js";import"./globalMenu-DByZOQh8.js";import"./PersonCircle-BmyGZKec.js";import"./Buildings2-ZFqwnXej.js";import"./InboxFill-TG9eCz0R.js";import"./MenuGrid-RTXUlCQ0.js";import"./MagnifyingGlass-C6rTQxQT.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-aUibtt6h.js";import"./Trash-CsnE7fwZ.js";import"./useLayout-Ce3UNpu-.js";import"./useLocale-WJJ4F2G9.js";import"./header-CxTdw3OI.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Bq15wZBe.js";import"./BookmarkSettingsItem-BPwIQIx9.js";import"./QueryLabel-Cr7h1Z-C.js";import"./Plus-BcB75ChO.js";import"./SettingsItemBase-CBrR65lC.js";import"./ItemMedia-C2Z0jrya.js";import"./Avatar-C_TtduNz.js";import"./AvatarGroup-BedFE_X6.js";import"./ChevronUp-D4YgcdQR.js";import"./ChevronDown-88HBChSA.js";import"./ChevronRight-BedwSMvr.js";import"./ItemBase-FTqYLeiu.js";import"./ItemLink-CRNO81NM.js";import"./ItemControls-CSWL4roz.js";import"./Badge-DQBHy5Q9.js";import"./Tooltip-KX6NnDMS.js";import"./Typography-Ckv3AOJx.js";import"./useHighlightedText-BqQK_DfD.js";import"./ContextMenu-BV5nv3Ct.js";import"./useDropdownMenuController-DIgZVBo5.js";import"./Dropdown-awoLZP1t.js";import"./SearchField-DJUCyIg2.js";import"./FieldBase-Di9G28SV.js";import"./Field-D9Cr4opO.js";import"./Label-DhhTw6wz.js";import"./Input-B1Y3KbZD.js";import"./MenuListItem-DGvsWI69.js";import"./MenuListDivider-Dx9O9cQW.js";import"./MenuListHeading-CPr8ol3d.js";import"./MenuItem-CHBZGQXu.js";import"./Checkmark-DBqEBMWV.js";import"./ItemLabel-CDU57d8k.js";import"./InformationSquare-5U7NjUWT.js";import"./MenuElipsisHorizontal-BhDkslsK.js";import"./Pencil-CqMnbq1C.js";import"./SkipLink-CkyvZCKj.js";import"./CookieBanner-D6viY95h.js";import"./Banner-C3oLFbOC.js";import"./GlobalHeader-CuvKkUaT.js";import"./useIsDesktop-Dk4WE87-.js";import"./GlobalAccountButton-CngMkIKM.js";import"./Enter-COL8hK3_.js";import"./GlobalMenuButton-DE_XSR5z.js";import"./MenuHamburger-kUbaqKWe.js";import"./AccountSelector-L6t1QPoi.js";import"./Switch-CnCXD43g.js";import"./AccountMenu-UeS_zP_s.js";import"./GlobalMenu-B3VOm4-n.js";import"./ArrowUndo-DNzLpryl.js";import"./Globe-DS1ljuLz.js";import"./BreadcrumbsLink-Svau84LP.js";import"./ArrowRight-D9IKmIv2.js";import"./Footer-DfufKz3H.js";import"./Flex-RSxiLUVh.js";import"./ButtonGroup-CDktoaSg.js";import"./ButtonGroupDivider-DMa9JJws.js";import"./ChevronUpDown-DMxjymbp.js";import"./ToolbarMenu-D5dQAGTD.js";import"./ToolbarSearch-QWfoLeEk.js";import"./SettingsModal-aoCm58w5.js";import"./ModalBody-Bf_4VZq1.js";import"./Section-DsI3lDGv.js";import"./ButtonIcon-CmTTKJCC.js";import"./ButtonLabel-smgeyMYQ.js";import"./TextField-DSzrwVXU.js";import"./inboxMenu-QyxF55OH.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
