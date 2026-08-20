import{a7 as o}from"./iframe-CfUrJ-sW.js";import{u as S}from"./useProfileLayout-CQAOLms_.js";import{u as c,B as g}from"./useBookmarks-DocH0zt1.js";import{L as k}from"./Layout-Bil_AZO5.js";import{P as x}from"./PageBase-CsG37eEd.js";import{H as p}from"./Heading-CC1NzZuf.js";import{T as b}from"./Toolbar-DQtv3B0o.js";import{B as I}from"./BookmarkModal-D0khMjVZ.js";import{u as h}from"./useInboxLayout-D-fb9bjq.js";import{u as f}from"./useAccountMenu-BRlkc5pq.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-C9PtCQcp.js";import"./Bell-jLloubcj.js";import"./Bookmark-DcThm6lj.js";import"./ClockDashed-aPBnVoDd.js";import"./globalMenu-vMstmbBJ.js";import"./PersonCircle-B9JPpazK.js";import"./Buildings2-TPdQjHRO.js";import"./InboxFill-DU7gG0NH.js";import"./MenuGrid-DLkNgGOt.js";import"./MagnifyingGlass-DeqXe_2Y.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-wjpNkncI.js";import"./Trash-4BxU-ya0.js";import"./useLayout-9FhoFmFf.js";import"./useLocale-N8U5qQK9.js";import"./header-DkQ1_w7m.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-VNE_nv00.js";import"./BookmarkSettingsItem-BZZ5aKm7.js";import"./QueryLabel-BkWZ3vRf.js";import"./Plus-hdfH71QK.js";import"./SettingsItemBase-t0GeXdqv.js";import"./ItemMedia-BbdQksB6.js";import"./Avatar-CQ8_o-yu.js";import"./AvatarGroup-BJfCcue9.js";import"./ChevronUp-rhZxrOkp.js";import"./ChevronDown-BqQbWOs1.js";import"./ChevronRight-BQqjok9o.js";import"./ItemBase-CCya3J9r.js";import"./ItemLink-_OyNsa5a.js";import"./ItemControls-K0n5tZKI.js";import"./Badge-Cy4UcitB.js";import"./Tooltip-DV6u4Pgt.js";import"./Typography-CAlmT_0b.js";import"./useHighlightedText-DCiIYobu.js";import"./ContextMenu-NIUZQkjq.js";import"./useDropdownMenuController-BagG9o2A.js";import"./Dropdown-Dwhf6SNg.js";import"./SearchField-D230b6Yn.js";import"./FieldBase-CrwLGD3E.js";import"./Field-6dtFYXL2.js";import"./Label-sGHyqM38.js";import"./Input-CJlrdXWO.js";import"./MenuListItem-CpLdOTrv.js";import"./MenuListDivider-BCZC89qs.js";import"./MenuListHeading-C_KnsA5D.js";import"./MenuItem-Dw5geetP.js";import"./Checkmark-8dE5LNjt.js";import"./ItemLabel-7ZtyJqf1.js";import"./InformationSquare-BZJWkHLO.js";import"./MenuElipsisHorizontal-DNQyfiZ2.js";import"./Pencil-OHQPb_ei.js";import"./SkipLink-DGjmzuof.js";import"./CookieBanner-DTijFDql.js";import"./Banner-BGFyNT7Z.js";import"./GlobalHeader-DAjm9Rgo.js";import"./useIsDesktop-EUyJ7Rb8.js";import"./GlobalAccountButton-giQ1XW_l.js";import"./Enter-SQD6s3z_.js";import"./GlobalMenuButton-DDBjx-Lc.js";import"./MenuHamburger-HF5Rvs2-.js";import"./AccountSelector-CFo21Sbu.js";import"./Switch-BF3XxZeS.js";import"./AccountMenu-DN41d1Ye.js";import"./GlobalMenu-3rOHIzxk.js";import"./ArrowUndo-B07mJyDj.js";import"./Globe-CHeOGe9p.js";import"./BreadcrumbsLink-Y8DFAxAq.js";import"./ArrowRight-D1yP_5S1.js";import"./Footer-Cz8S3nNy.js";import"./Flex-DpzfZDgd.js";import"./ButtonGroup-9eoCQEvr.js";import"./ButtonGroupDivider-BBlyq7nZ.js";import"./ChevronUpDown-CuHYzhSe.js";import"./ToolbarMenu-CJYOognW.js";import"./ToolbarSearch-DErDtCpx.js";import"./SettingsModal-C0lARV3s.js";import"./ModalBody-BTkCYeJ8.js";import"./Section-CnfuXcY3.js";import"./ButtonIcon-CzpTDJ2F.js";import"./ButtonLabel-ChaENXy3.js";import"./TextField-0bvajYTU.js";import"./inboxMenu-DEDQ_u05.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
