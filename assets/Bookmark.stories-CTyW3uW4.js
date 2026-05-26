import{j as o}from"./iframe-C32LkOFR.js";import{u as h}from"./useInboxLayout-BnJuGdwI.js";import{u as j}from"./useAccountMenu-1EjrHnhT.js";import{u as c,B as g}from"./useBookmarks-CXCy5kXY.js";import{L as k}from"./Layout-ClIfaedj.js";import{P as x}from"./PageBase-Dgy6d6kk.js";import{H as p}from"./Heading-C2AVc7ZV.js";import{T as b}from"./Toolbar-DtXUXRyF.js";import{B as I}from"./BookmarkModal-D_wmNmfk.js";import{u as S}from"./useProfileLayout-CBBYFYao.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu--onmotFW.js";import"./InboxFill-CFq9SYOT.js";import"./useId-C6VS968l.js";import"./Plus-BuKKYKtN.js";import"./PersonCircle-NpZjwD6u.js";import"./Bookmark-BsIrq4-c.js";import"./Archive-DlpjqB3V.js";import"./Trash-C9CuwFFb.js";import"./InformationSquare-BqsScoMm.js";import"./globalMenu-D8wHdbGP.js";import"./Buildings2-DWFUVmyZ.js";import"./MenuGrid-CUkG-sMG.js";import"./MagnifyingGlass-WQhuuXQl.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-DmBG6enH.js";import"./useLocale-dH69KaSQ.js";import"./header-BC6OBGnk.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-C7oIvOKf.js";import"./Button-DJyTPLgL.js";import"./tooltip-C1z0ba6x.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DQpZXHwn.js";import"./QueryLabel-qSZLfQuY.js";import"./SettingsItemBase-3DPHee1e.js";import"./ChevronUp-BXoYzDan.js";import"./ChevronDown-CFXYCpRP.js";import"./ChevronRight-BRam3foO.js";import"./ItemLink-BpCtkCJ8.js";import"./index-B41-Gq6i.js";import"./ItemMedia-Bzb68dd0.js";import"./XMark-CJ_7TJfx.js";import"./Avatar-Bfhk-MsW.js";import"./Skeleton-BFp1Ns5z.js";import"./AvatarGroup-CngdFV9S.js";import"./Icon-ClcJ2Ugl.js";import"./ItemControls-6sDFc5WV.js";import"./Badge-B5rN9dZh.js";import"./Tooltip-D2U0c2nY.js";import"./Typography-BtAt1mkJ.js";import"./useHighlightedText-TWz6a-kb.js";import"./ContextMenu-afhlnX7Z.js";import"./useDropdownMenuController-CToZfoEW.js";import"./Dropdown-3ScmWyOY.js";import"./MenuElipsisHorizontal-DLqsyN8R.js";import"./SearchField-CSvKC2kE.js";import"./FieldBase-C4PiPQJY.js";import"./Label--g4FWuur.js";import"./Input-944JhKVs.js";import"./MenuListItem-CpDZm8hJ.js";import"./MenuListHeading-DFXzzdQl.js";import"./MenuItem-B2ec7Awl.js";import"./Checkmark-Cohtyyf2.js";import"./useMenu-CglJcFc3.js";import"./index-DD5_FiA2.js";import"./Pencil-xx8gyCLH.js";import"./SkipLink-BmqkZxDx.js";import"./Banner-CoV19vuj.js";import"./GlobalHeader-CM21Tz7Y.js";import"./useIsDesktop-CuiebE6s.js";import"./GlobalAccountButton-DggAbOBa.js";import"./Enter-D1Z6jONJ.js";import"./GlobalMenuButton-V0XO2gXT.js";import"./MenuHamburger-CP22A_hy.js";import"./AccountSelector-2ay3anmC.js";import"./AccountMenu-D13tDpE5.js";import"./Switch-6v-VyuZR.js";import"./GlobalMenu-ChS1f4Nk.js";import"./ArrowUndo-C8csTNhw.js";import"./Globe-AP3W_AdN.js";import"./BreadcrumbsLink-OzEeyPy1.js";import"./ArrowRight-BJ4fh4f2.js";import"./Footer-mMzCBzLk.js";import"./Flex-BUJ7sT5C.js";import"./ChevronUpDown-Dxpj943m.js";import"./ButtonGroup-C2Onw-9a.js";import"./ButtonGroupDivider-C3K0uMrd.js";import"./ToolbarMenu-DBsXgIzo.js";import"./ToolbarSearch-DVPrcmBl.js";import"./SettingsModal-BZYvkT5f.js";import"./ModalBody-Dqmc2GiO.js";import"./Section-BW54BVJv.js";import"./ButtonIcon-C8Th3GXI.js";import"./ButtonLabel-zcuLnIEs.js";import"./TextField-9LtiQjkC.js";import"./Bell-CJjrcI_k.js";import"./ClockDashed-BYpO9OrU.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const he=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,he as __namedExportsOrder,Ie as default};
